<?php

try {
    require('../app/db-settings.php');
    require('./top-page');
?>

<?php

} catch (PDOException $e) {

    echo '接続失敗' . $e->getMessage();
    exit();
}