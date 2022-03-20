<?php

try {
  require('../app/db-settings.php');
} catch (PDOException $e) {

  echo '接続失敗' . $e->getMessage();
  exit();
}

$this_month = '202201';
$today = '20220117';
require('../app/query.php');
require('./top-page.php');
?>

<?php
