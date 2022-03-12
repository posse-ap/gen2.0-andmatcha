<?php
//PDOの設定
$dsn = 'mysql:host=db;dbname=quiz;charset=utf8';
$user = 'root';
$password = 'secret';
$pdo = new PDO($dsn, $user, $password, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);
