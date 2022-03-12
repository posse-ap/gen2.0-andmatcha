<?php
try {
    require('./pdo.php');
?>

    <p><a href="./quiz.php?id=1">1.東京の難読地名クイズ</a></p>
    <p><a href="./quiz.php?id=2">2.広島県の難読地名クイズ</a></p>

<?php
} catch (PDOException $e) {
    echo '接続失敗' . $e->getMessage();
}
exit();
