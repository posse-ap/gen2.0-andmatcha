<?php

$dsn = 'mysql:host=db;dbname=quiz;charset=utf8';
$user = 'root';
$password = 'secret';

try {

    $db = new PDO($dsn, $user, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>

<p><a href="./quiz.php?id=1">1.東京の難読地名クイズ</a></p>
<p><a href="./quiz.php?id=2">2.広島県の難読地名クイズ</a></p>

<?php
} catch (PDOException $e) {

    echo '接続失敗' . $e->getMessage();
    exit();
}
