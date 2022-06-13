<?php

if (!isset($_GET['id'])) {
    header('Location: ' . $_SERVER['HTTP_HOST'] . '/quizy/index.php');
}
