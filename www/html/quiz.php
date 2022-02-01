<?php
require('../app/_page-settings.php');
?>

<body>
    <?php
    include('../app/_header.php');
    include('../app/_ad.php');
    ?>

    <!-- メインコンテンツ -->
    <div class="content-wrapper">
        <?php
        include('../app/_main-contents-top.php');
        ?>

        <!-- クイズ部分 -->
        <div class="quiz-container">
            <?php
            include('../app/_main-contents-quiz.php');
            ?>
        </div>

        <!-- ページ末尾 -->
        <?php
        include('../app/_main-contents-bottom.php');
        ?>
    </div>
    <script src="quiz.js"></script>
</body>

</html>