<?php

$month_today = '01';

// 合計学習時間
$total_stmt = $db->prepare("SELECT SUM(`hours`) AS total FROM study_records");
$total_stmt->execute();
$total = $total_stmt->fetch()['total'];

//日毎の学習時間
$daily_stmt = $db->prepare("SELECT SUM(`hours`) AS `sum` FROM study_records WHERE DATE_FORMAT(`date`, '%m') = ? GROUP BY `date`");
$daily_stmt->execute([$month_today]);
$daily = $daily_stmt->fetchAll();

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
