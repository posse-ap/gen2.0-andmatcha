<?php

//言語一覧
$langs_stmt = $db->query("SELECT * FROM langs");
$langs = $langs_stmt->fetchAll();

//コンテンツ一覧
$contents_stmt = $db->query("SELECT * FROM contents");
$contents = $contents_stmt->fetchAll();

// 合計学習時間
$total_stmt = $db->prepare("SELECT SUM(`hours`) AS total FROM study_records");
$total_stmt->execute();
$total = $total_stmt->fetch()['total'];

// 今月の学習時間
$this_month_stmt = $db->prepare("SELECT SUM(`hours`) AS `sum` FROM study_records WHERE DATE_FORMAT(`date`, '%Y%m') = ?");
$this_month_stmt->execute([$this_month]);
$this_month_sum = $this_month_stmt->fetch()['sum'];

// 今日の学習時間
$today_stmt = $db->prepare("SELECT SUM(`hours`) AS `sum` FROM study_records WHERE DATE_FORMAT(`date`, '%Y%m%d') = ?");
$today_stmt->execute([$today]);
$today_sum = $today_stmt->fetch()['sum'];

//日毎の学習時間（棒グラフ用） 日付の連番テーブルを作成し、それに日毎の学習時間を結合(学習記録を送信していない日があっても正しく表示されるように)
$daily_stmt = $db->prepare(
  "WITH RECURSIVE date_table(date_value) AS (
    SELECT
      DATE_FORMAT(:today, '%Y-%m-01')
    UNION ALL
    SELECT
      DATE_ADD(date_value, INTERVAL 1 DAY)
    FROM
      date_table
    WHERE
      date_value < LAST_DAY(:today)
  )
  SELECT
    date_value, `sum`
  FROM
    date_table
  LEFT JOIN
    (SELECT `date`, SUM(`hours`) AS `sum` FROM study_records WHERE DATE_FORMAT(`date`, '%Y%m') = DATE_FORMAT(:today, '%Y%m') GROUP BY DATE_FORMAT(`date`, '%Y%m%d')) AS study_hours
  ON
    date_table.date_value = study_hours.date"
);
$daily_stmt->execute([':today' => $today]);
$daily_sum = $daily_stmt->fetchAll();

//ドーナツグラフ用 言語ごとの学習時間
$hours_lang_stmt = $db->prepare(
  "WITH daily_hours AS (
    SELECT
      study_record_id,
      lang_id,
      langs.name AS lang_name,
      `hours`/COUNT(*) OVER(PARTITION BY study_record_id) AS hours_lang
    FROM
      studied_langs
    LEFT JOIN study_records ON study_records.id = studied_langs.study_record_id
    LEFT JOIN langs ON langs.id = studied_langs.lang_id
    WHERE
      DATE_FORMAT(`date`, '%Y%m') = DATE_FORMAT(:today, '%Y%m')
  )
  SELECT
    daily_hours.lang_name AS lang_name,
    SUM(daily_hours.hours_lang) AS sum_lang
  FROM
    daily_hours
  GROUP BY
    lang_id
  ORDER BY
    lang_id"
);
$hours_lang_stmt->execute([':today' => $today]);
$hours_lang = $hours_lang_stmt->fetchAll();

//ドーナツグラフ用 コンテンツごとの学習時間
$hours_content_stmt = $db->prepare(
  "WITH daily_hours AS (
    SELECT
      study_record_id,
      content_id,
      contents.name AS content_name,
      `hours`/COUNT(*) OVER(PARTITION BY study_record_id) AS hours_content
    FROM
      studied_contents
    LEFT JOIN study_records ON study_records.id = studied_contents.study_record_id
    LEFT JOIN contents ON contents.id = studied_contents.content_id
    WHERE
      DATE_FORMAT(`date`, '%Y%m') = DATE_FORMAT(:today, '%Y%m')
  )
  SELECT
    daily_hours.content_name AS content_name,
    SUM(hours_content) AS sum_content
  FROM
    daily_hours
  GROUP BY
    content_id
  ORDER BY
    content_id"
);
$hours_content_stmt->execute([':today' => $today]);
$hours_content = $hours_content_stmt->fetchAll();
?>

<script>
  ////////////データをjsに渡して整形////////////
  const dailySum = [
    ['date', 'hours']
  ];
  const dailySumTmp = <?= json_encode($daily_sum); ?>;
  dailySumTmp.forEach((value) => {
    dailySum.push([Number(value.date_value.substr(8)), Number(value.sum)]);
  });

  //学習言語グラフ用データ
  const hoursLang = [
    ['lang', 'hours']
  ];
  const hoursLangTmp = <?= json_encode($hours_lang); ?>;
  hoursLangTmp.forEach((value) => {
    hoursLang.push([value.lang_name, Math.floor(Number(value.sum_lang))]);
  });
  console.log(hoursLang);

  //学習コンテンツグラフ用データ
  const hoursContent = [
    ['content', 'hours']
  ];
  const hoursContentTmp = <?= json_encode($hours_content); ?>;
  hoursContentTmp.forEach((value) => {
    hoursContent.push([value.content_name, Math.floor(Number(value.sum_content))]);
  });
  console.log(hoursContent);
</script>
