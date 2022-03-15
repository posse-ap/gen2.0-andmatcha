<?php

$this_month = '202201';
$today = '20220117';

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

//日毎の学習時間（棒グラフ用）
$daily_stmt = $db->prepare("SELECT SUM(`hours`) AS `sum` FROM study_records WHERE DATE_FORMAT(`date`, '%Y%m') = ? GROUP BY DATE_FORMAT(`date`, '%Y%m%d')");
$daily_stmt->execute([$this_month]);
$daily_sum = $daily_stmt->fetchAll();

printf('合計学習時間: %d時間, 今月の学習時間: %d時間, 今日の学習時間: %d時間', $total, $this_month_sum, $today_sum);
foreach($daily_sum as $value) {
  print_r($value['sum']);
}

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>POSSE Webapp</title>
</head>
<body>
    <h1>aaaaa</h1>
</body>
</html>
