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