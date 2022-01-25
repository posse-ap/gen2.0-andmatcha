<?php

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
    <header>
        <div class="header-content-wrapper content-wrapper">
            <!-- メニューボタン -->
            <a href="https://www.google.com/" class="menu-button"><span class="menu-button-text">≡</span></a>
            <!-- ロゴマーク -->
            <div class="logo">
                <a href="https://kuizy.net/">
                    <svg width="228px" height="86px" viewBox="0 0 228 86" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-logo">
                        <desc>Kuizy</desc>
                        <defs></defs>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M45.072,66 L31.824,66 C29.4559882,62.8639843 27.2160106,59.8880141 25.104,57.072 C23.2479907,54.6399878 21.4080091,52.1920123 19.584,49.728 C17.7599909,47.2639877 16.3360051,45.2960074 15.312,43.824 L15.312,36.912 L30.864,19.632 L44.592,19.632 L25.776,40.368 L45.072,66 Z M12.624,66 L0.336,66 L0.336,0.816 L12.624,0.816 L12.624,66 Z M83.616,19.632 L95.904,19.632 L95.904,66 L84.96,66 L83.616,59.952 C83.0399971,60.8480045 82.3040045,61.7119958 81.408,62.544 C80.5119955,63.3760042 79.4880058,64.1439965 78.336,64.848 C77.1839942,65.5520035 75.9360067,66.1119979 74.592,66.528 C73.2479933,66.9440021 71.8080077,67.152 70.272,67.152 C65.1519744,67.152 61.1840141,65.6800147 58.368,62.736 C55.5519859,59.7919853 54.144,55.4080291 54.144,49.584 L54.144,19.632 L66.432,19.632 L66.432,49.2 C66.432,52.1440147 67.0239941,54.2399938 68.208,55.488 C69.3920059,56.7360062 71.1999878,57.36 73.632,57.36 C75.6800102,57.36 77.5359917,56.7520061 79.2,55.536 C80.8640083,54.3199939 82.3359936,52.8800083 83.616,51.216 L83.616,19.632 Z M124.056,66 L111.768,66 L111.768,19.632 L124.056,19.632 L124.056,66 Z M117.912,0.144 C120.280012,0.144 122.103994,0.83199312 123.384,2.208 C124.664006,3.58400688 125.304,5.19999072 125.304,7.056 C125.304,8.91200928 124.664006,10.5279931 123.384,11.904 C122.103994,13.2800069 120.280012,13.968 117.912,13.968 C115.543988,13.968 113.720006,13.2800069 112.44,11.904 C111.159994,10.5279931 110.52,8.91200928 110.52,7.056 C110.52,5.19999072 111.159994,3.58400688 112.44,2.208 C113.720006,0.83199312 115.543988,0.144 117.912,0.144 Z M136.848,59.664 L158.16,28.272 L138.576,28.272 L138.576,19.632 L173.136,19.632 L173.136,25.968 L151.824,57.36 L173.904,57.36 L173.904,66 L136.848,66 L136.848,59.664 Z M215.496,58.8 C214.919997,59.6960045 214.168005,60.5599958 213.24,61.392 C212.311995,62.2240042 211.272006,62.9919965 210.12,63.696 C208.967994,64.4000035 207.704007,64.9599979 206.328,65.376 C204.951993,65.7920021 203.496008,66 201.96,66 C196.839974,66 192.872014,64.5280147 190.056,61.584 C187.239986,58.6399853 185.832,54.2560291 185.832,48.432 L185.832,19.632 L198.12,19.632 L198.12,48.048 C198.12,50.9920147 198.711994,53.0879938 199.896,54.336 C201.080006,55.5840062 202.887988,56.208 205.32,56.208 C207.36801,56.208 209.223992,55.6000061 210.888,54.384 C212.552008,53.1679939 214.023994,51.7280083 215.304,50.064 L215.304,19.632 L227.592,19.632 L227.592,62.256 C227.592,66.4160208 227.000006,69.9679853 225.816,72.912 C224.631994,75.8560147 223.01601,78.2559907 220.968,80.112 C218.91999,81.9680093 216.488014,83.3279957 213.672,84.192 C210.855986,85.0560043 207.816016,85.488 204.552,85.488 C200.903982,85.488 197.512016,85.0720042 194.376,84.24 C191.239984,83.4079958 188.616011,82.288007 186.504,80.88 L189.576,71.376 C191.752011,72.784007 193.991988,73.7759971 196.296,74.352 C198.600012,74.9280029 200.839989,75.216 203.016,75.216 C206.98402,75.216 210.055989,74.3040091 212.232,72.48 C214.408011,70.6559909 215.496,67.440023 215.496,62.832 L215.496,58.8 Z" id="kuizy" fill="#25ABD8"></path>
                        </g>
                    </svg>
                </a>
            </div>
            <!-- ヘッダー内のボタン -->
            <a href="https://kuizy.net/prepare" class="createquiz-button header-button">クイズ・診断を作る</a>
            <a href="https://kuizy.net/search" class="search-button header-button"> 検索</a>
        </div>
    </header>

    <!-- タブバー -->
    <div class="tab-container">
        <ul class="tabs">
            <a href="https://kuizy.net/quiz" class="tab-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <span class="tab-text">クイズ</span>
            </a>
            <a href="https://kuizy.net/analysis" class="tab-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span class="tab-text">診断</span>
            </a>
            <a href="https://kuizy.net/sketch" class="tab-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                    <path d="M2 2l7.586 7.586"></path>
                    <circle cx="11" cy="11" r="2"></circle>
                </svg>
                <span class="tab-text">お絵描き診断</span>
            </a>
            <a href="https://kuizy.net/me" class="tab-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                <span class="tab-text">ログイン</span></a>
        </ul>
    </div>

    <!-- kuizy広告 -->
    <div class="quizy-ad-top">
        <a href="https://kuizy.net/shiritori" class="quizy-ad-top-text">今Kuizyお絵描きしりとりで対戦相手が待っています🎨！<span class="link-here">今すぐ遊ぶ</span>！</a>
    </div>

    <!-- メインコンテンツ -->
    <div class="content-wrapper">
        <h1><?= $big_question['title']; ?></h1>
        <!-- ユーザー情報 -->
        <div class="userinfo-box">
            <a href="https://kuizy.net/user/kuizy_net"><img src="img/usericon.jpg" alt="user icon" class="user-icon"></a>
            <div class="username-box">
                <a href="https://kuizy.net/user/kuizy_net" class="username">@kuizy_net</a>
            </div>
        </div>
        <!-- タグ -->
        <div class="tag-box">
            <a href="<?= $big_question['tag_link']; ?>" class="tag-text"><?= $big_question['tag']; ?></a>
        </div>
        <!-- クイズに関する統計情報 -->
        <p id="user" class="user-score">ビュー数<span class="count">000</span>平均正答率<span class="count">000%</span>全問正解率<span class="count">000%</span></p>
        <p class="user-score-caution">正答率などの反映は少し遅れることがあります。</p>
        <!-- SNS共有 -->
        <div class="social-box">
            <a href="http://twitter.com/share?url=https%3A%2F%2Fkuizy.net%2Fquiz%2F10&text=%E3%82%AC%E3%83%81%E3%81%A7%E6%9D%B1%E4%BA%AC%E3%81%AE%E4%BA%BA%E3%81%97%E3%81%8B%E8%A7%A3%E3%81%91%E3%81%AA%E3%81%84%EF%BC%81%20%23%E6%9D%B1%E4%BA%AC%E3%81%AE%E9%9B%A3%E8%AA%AD%E5%9C%B0%E5%90%8D%E3%82%AF%E3%82%A4%E3%82%BA%20" class="social-button tweet-button">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 410.155 410.155" style="enable-background:new 0 0 410.155 410.155;" xml:space="preserve" class="svg-tweet">
                    <path style="fill:white;" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067 	l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336 	c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325 	c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481 	c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0 	c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032 	c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569 	c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0 	c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006 	c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883 	c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201 	c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591 	l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z">
                    </path>
                </svg>
            </a>
            <a href="http://www.facebook.com/share.php?u=https%3A%2F%2Fkuizy.net%2Fquiz%2F10" class="social-button fb-button">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60.734px" height="60.733px" viewBox="0 0 60.734 60.733" style="enable-background:new 0 0 60.734 60.733;" xml:space="preserve" class="svg-fb">
                    <path style="fill:white;" d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914 		v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462 		v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z">
                    </path>
                </svg>
            </a>
            <a href="http://line.me/R/msg/text/?%E3%82%AC%E3%83%81%E3%81%A7%E6%9D%B1%E4%BA%AC%E3%81%AE%E4%BA%BA%E3%81%97%E3%81%8B%E8%A7%A3%E3%81%91%E3%81%AA%E3%81%84%EF%BC%81%20%23%E6%9D%B1%E4%BA%AC%E3%81%AE%E9%9B%A3%E8%AA%AD%E5%9C%B0%E5%90%8D%E3%82%AF%E3%82%A4%E3%82%BA%20https%3A%2F%2Fkuizy.net%2Fquiz%2F10" class="social-button line-button">
                <svg aria-hidden="true" data-prefix="fab" data-icon="line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-line">
                    <path fill="white" d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z">
                    </path>
                </svg>
            </a>
        </div>
        <!-- スポンサー広告 -->
        <div class="ad-box">
            <a href="https://www.google.com/" class="ad-img"><img src="img/ad.jpg" alt="広告"></a>
        </div>

        <!-- クイズ部分 -->
        <div class="quiz-container">
            <?php
            //questionsテーブルを取得
            $questions_stmt = $pdo->prepare("SELECT * FROM questions WHERE big_question_id = ?");
            $questions_stmt->execute([$page_id]);
            $questions = $questions_stmt->fetchAll();

            $quiz_number = 1; //問題番号　初期値: 1
            foreach ($questions as $question) :
                //この設問の選択肢を取得(choicesテーブル)
                $choices_stmt = $pdo->prepare("SELECT * FROM choices WHERE big_question_id = :big_question_id AND quiz_number = :quiz_number");
                $choices_stmt->execute(['big_question_id' => $page_id, 'quiz_number' => $quiz_number]);
                $choices = $choices_stmt->fetchAll();
                //1,2,3の配列を1問ごとにシャッフル->選択肢の順序を並び替え
                $random = array(1, 2, 3);
                shuffle($random);
            ?>
                <div class="quiz-box">
                    <h1 class="quiz-title"><?= $quiz_number; ?>.この地名はなんて読む？</h1>
                    <img src="./img/<?= $question['image']; ?>">
                    <ul id="choices<?= $quiz_number; ?>" class="choices-list">
                        <?php foreach ($choices as $choice) :
                            $choice_id = $random[$choice['choice_id'] - 1]; //1,2,3
                            $choice = $choices[$choice_id - 1]; //シャッフルした後のchoiceを再代入
                        ?>
                            <li id="choice<?= $quiz_number; ?>_<?= $choice_id; ?>" class="choice-item" onclick="clickfunction(<?= $quiz_number; ?>,<?= $choice_id; ?>, <?= $choice['valid']; ?>)"><?= $choice['name']; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <div id="comment_box<?= $quiz_number; ?>" class="comment-box hide">
                    <h3 id="comment_title<?= $quiz_number; ?>" class="comment-title"></h3>
                    <p id="comment_text<?= $quiz_number; ?>" class="comment-text"><?= $question['text']; ?></p>
                </div>
            <?php
                $quiz_number++;
            endforeach;
            ?>
        </div>

        <!-- ページ末尾 -->
        <div class="contact">
            <p>クイズに間違いを発見された方は<a href="https://www.google.com/">こちら</a>からご報告ください。</p>
        </div>
    </div>
    <script src="quiz.js"></script>
</body>

</html>