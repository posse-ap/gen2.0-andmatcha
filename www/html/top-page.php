<?php
// テストコード
// print_r($hours_lang);
// print_r($hours_content);

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>POSSE Webapp</title>
  <link rel="stylesheet" href="./css/destyle.css">
  <link rel="stylesheet" href="./css/style.css">
</head>

<body>
  <div class="modal">
    <div class="modal__container">

    </div>
  </div>

  <header class="header">
    <div class="header__logo">
      <img src="./img/posse_logo.jpeg">
    </div>
    <p class="header__week">
      4th week
    </p>
    <button class="header__button">
      記録・投稿
    </button>
  </header>

  <div class="main">
    <div class="main__container main__container_v">
      <div class="main__container__area_hours">
        <div class="main__container__area_hours__box main__container__area_tile">
          <p class="main__container__area_hours__box__title">Today</p>
          <p class="main__container__area_hours__box__num"><?= $today_sum; ?></p>
          <p class="main__container__area_hours__box__unit">hours</p>
        </div>
        <div class="main__container__area_hours__box main__container__area_tile">
          <p class="main__container__area_hours__box__title">Month</p>
          <p class="main__container__area_hours__box__num"><?= $this_month_sum; ?></p>
          <p class="main__container__area_hours__box__unit">hours</p>
        </div>
        <div class="main__container__area_hours__box main__container__area_tile">
          <p class="main__container__area_hours__box__title">Total</p>
          <p class="main__container__area_hours__box__num"><?= $total; ?></p>
          <p class="main__container__area_hours__box__unit">hours</p>
        </div>
      </div>
      <div class="main__container__area_bar_chart main__container__area_tile"></div>
    </div>
    <div class="main__container">
      <div class="main__container__area_doughnut_chart main__container__area_tile">
        <h2>学習言語</h2>
        <div class="main__container__area_doughnut_chart__box"></div>
        <ul>
          <?php foreach ($langs as $lang) : ?>
            <li>
              <div class="main__container__area_doughnut_chart__list_circle"></div>
              <?= $lang['name']; ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <div class="main__container__area_doughnut_chart main__container__area_tile">
        <h2>学習コンテンツ</h2>
        <div class="main__container__area_doughnut_chart__box"></div>
        <ul>
          <?php foreach ($contents as $content) : ?>
            <li>
              <div class="main__container__area_doughnut_chart__list_circle"></div>
              <?= $content['name']; ?>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
  </div>
</body>

</html>
