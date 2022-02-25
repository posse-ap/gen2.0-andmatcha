<?php
//ページIDが設定されていなかったらindex.phpにリダイレクトする
$page_id = filter_input(INPUT_GET, 'id');
if (!isset($page_id)) {
    header('Location: ./index.php');
}

require('./pdo.php');

//big_questionsテーブルから大問タイトルを取得
$big_question_stmt = $pdo->prepare("SELECT title FROM big_questions WHERE id = ?");
$big_question_stmt->execute([$page_id]);
$big_question = $big_question_stmt->fetch();

//questionsテーブルの、この大問に該当するレコードを取得
$questions_stmt = $pdo->prepare("SELECT * FROM questions WHERE big_question_id = ?");
$questions_stmt->execute([$page_id]);
$questions = $questions_stmt->fetchAll();
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $big_question['title']; ?></title>
    <link rel="stylesheet" href="quiz.css">
</head>

<body>
    <div class="content-wrapper">
        <h1><?= $big_question['title']; ?></h1>
        <div class="quiz-container">

            <!-- 設問に関するループ -->
            <?php
            foreach ($questions as $index => $question) :
                $question_id = $question['id']; //questionsテーブルのidを取得、設問ごとに再代入される

                //choicesテーブルの、この設問に該当するレコードを取得
                $choices_stmt = $pdo->prepare("SELECT * FROM choices WHERE question_id = ?");
                $choices_stmt->execute([$question_id]);
                $choices = $choices_stmt->fetchAll();

                $order = range(0, count($choices) - 1); //シャッフル用: 0始まりで、長さが選択肢の数である小さい順の整数の配列
                shuffle($order); //設問ごとにシャッフルする
            ?>
                <!-- クイズボックス -->
                <div class="quiz-box">
                    <h1 class="quiz-title"><?= $index + 1; ?>.この地名はなんて読む？</h1>
                    <img src="./img/<?= $question['image']; ?>">
                    <ul id="choices<?= $question_id; ?>" class="choices-list">

                        <!-- 選択肢に関するループ -->
                        <?php foreach ($choices as  $choice_index => $choice) : ?>
                            <li id="choice<?= $question_id; ?>_<?= $choice_index + 1; ?>" class="choice-item" style="order: <?= $order[$choice_index]; ?>;" onclick="clickfunction(<?= $question_id; ?>,<?= $choice_index + 1; ?>, <?= $choice['valid']; ?>)">
                                <?= $choice['name']; ?>
                            </li>
                        <?php endforeach; ?>

                    </ul>
                </div>
                <!-- コメントボックス -->
                <div id="comment_box<?= $question_id; ?>" class="comment-box hide">
                    <h3 id="comment_title<?= $question_id; ?>" class="comment-title"></h3>
                    <p id="comment_text<?= $question_id; ?>" class="comment-text"><?= $question['comment']; ?></p>
                </div>
            <?php endforeach; ?>

        </div>
    </div>

    <script src="quiz.js"></script>
</body>

</html>
