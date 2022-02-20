<?php

// TODO キーワードの整理　question, quiz -> quizに統一したい
// TODO 機能、パーツごとにファイルを切り分ける

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

<body>
    <!-- クイズ部分 -->
    <div class="quiz-container">
        <?php
        //questionsテーブルを取得
        $questions_stmt = $pdo->prepare("SELECT * FROM questions WHERE big_question_id = ?");
        $questions_stmt->execute([$page_id]);
        $questions = $questions_stmt->fetchAll();

        $quiz_number = 1;
        foreach ($questions as $question) :
            //この設問の選択肢を取得(choicesテーブル)
            $choices_stmt = $pdo->prepare("SELECT * FROM choices WHERE big_question_id = :big_question_id AND quiz_number = :quiz_number");
            $choices_stmt->execute(['big_question_id' => $page_id, 'quiz_number' => $quiz_number]);
            $choices = $choices_stmt->fetchAll();
        ?>
            <div class="quiz-box">
                <h1 class="quiz-title"><?= $quiz_number; ?>.この地名はなんて読む？</h1>
                <img src="./img/<?= $question['image']; ?>">
                <ul id="choices<?= $quiz_number; ?>" class="choices-list">
                    <?php
                    //1,2,3の配列を1問ごとにシャッフル->選択肢の順序を並び替え
                    $new_choice_numbers = range(0, count($choices) - 1);
                    shuffle($new_choice_numbers);
                    $initial_choice_number = 0;
                    foreach ($choices as $choice) :
                        $choice_number = $new_choice_numbers[$initial_choice_number];
                        $choice = $choices[$choice_number]; //シャッフルした後のchoiceを再代入
                    ?>
                        <li id="choice<?= $quiz_number; ?>_<?= $choice_number; ?>" class="choice-item" onclick="clickfunction(<?= $quiz_number; ?>,<?= $choice_number; ?>, <?= $choice['valid']; ?>)"><?= $choice['name']; ?></li>
                    <?php
                        $initial_choice_number++;
                    endforeach;
                    ?>
                </ul>
            </div>
            <div id="comment_box<?= $quiz_number; ?>" class="comment-box hide">
                <h3 id="comment_title<?= $quiz_number; ?>" class="comment-title"></h3>
                <p id="comment_text<?= $quiz_number; ?>" class="comment-text"><?= $question['comment']; ?></p>
            </div>
        <?php
            $quiz_number++;
        endforeach;
        ?>
    </div>

    <script src="quiz.js"></script>
</body>

</html>