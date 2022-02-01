<?php

// TODO キーワードの整理　question, quiz -> quizに統一したい
// TODO 機能、パーツごとにファイルを切り分ける
// TODO 正解数カウント機能 正解数に応じてページ末尾にコメントを付す

// 問題番号(quiz_number)は1始まり、選択肢番号(choice_number)は0始まり ...問題はDBのid(1始まり)を使う、選択肢は1度配列(0始まり)に直すため
// 任意の問題数、選択肢数に対応 ...このためにはquiz_numberは必要と考えた

//ページIDが設定されていなかったらindex.phpにリダイレクトする
$page_id = filter_input(INPUT_GET, 'id');
if (!isset($page_id)) {
    header('Location: ./index.php');
}

//PDOの設定
$dsn = 'mysql:host=db;dbname=quiz;charset=utf8';
$user = 'root';
$password = 'secret';
$pdo = new PDO($dsn, $user, $password, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
]);

//big_questionsテーブルを取得
$big_questions_stmt = $pdo->query("SELECT * FROM big_questions");
$big_questions = $big_questions_stmt->fetchAll();
$big_question = $big_questions[$page_id - 1];

?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $big_question['title']; ?></title>
    <link rel="stylesheet" href="quiz.css">
    <link rel="shortcut icon" href="img/favicon.ico">
</head>