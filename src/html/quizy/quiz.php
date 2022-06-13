<?php
require(dirname(__FILE__, 3) . '/app/check-id.php');

require(dirname(__FILE__, 3) . '/app/db-connect.php');

$title = $db->prepare("SELECT name FROM big_questions WHERE id = ?");
$title->execute([$_GET['id']]);
$title = $title->fetchColumn();

echo $title;
