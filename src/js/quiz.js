'use strict';

/**
 * 選択肢クリック時の動作を定義します
 * @param {number} quizNumber 問題番号
 * @param {number} choiceNumber 選択肢番号
 * @param {number} answerChoiceNumber 正解の選択肢番号
 */
const clickFn = (quizNumber, choiceNumber, answerChoiceNumber) => {
    // クリックした選択肢を強調
    document.getElementById(`choice${quizNumber}_${choiceNumber}`).classList.add('c-quiz__choice--clicked');
    // 答え表示エリアを表示
    document.getElementById(`answerArea${quizNumber}`).classList.remove('c-quiz__answer-area--hide');
    // 正誤判定
    if (choiceNumber === answerChoiceNumber) {
        // 正解の場合
        document.getElementById(`answerArea${quizNumber}`).classList.add('c-quiz__answer-area--correct');
        document.getElementById(`answerTitle${quizNumber}`).classList.add('c-quiz__answer-title--correct');
        document.getElementById(`answerTitle${quizNumber}`).innerText = '正解！';
    } else {
        // 不正解の場合
        document.getElementById(`answerArea${quizNumber}`).classList.add('c-quiz__answer-area--incorrect');
        document.getElementById(`answerTitle${quizNumber}`).classList.add('c-quiz__answer-title--incorrect');
        document.getElementById(`answerTitle${quizNumber}`).innerText = '不正解...';
    }

    // 一度解答した問題の選択肢を押せなくする
    document.querySelectorAll(`#choices${quizNumber} .js-choice`).forEach((choice) => {
        choice.classList.add('c-quiz__choice--disabled');
    });
}

/**
 * クイズデータからクイズのHTMLを生成します
 * @typedef{{ num: number, title: string, img: string, choices: {num: number, value: string}[] ans: number, src: string }} Quiz
 * @param {Quiz} param0 quizzes: Quiz[]の要素: Quizを受け取ります
 * @returns {Node} クイズ1問分のNodeを返します
 */
const createQuiz = ({ num, title, img, choices, ans, src }) => {
    // HTMLファイルから問題のテンプレートを取得しクローンを作成
    const quizEl = document.getElementById('quizTemplate').cloneNode(true);
    // idの重複を避けるためにid属性を削除
    quizEl.removeAttribute('id');
    // 非表示用classNameを削除
    quizEl.classList.remove('c-quiz--hide');
    // 問題番号をセット
    quizEl.querySelector('.js-quiz-num').innerText = `Q${num}`;
    // 問題文をセット
    quizEl.querySelector('.js-quiz-title').innerText = title;
    // 画像をセット
    quizEl.querySelector('.js-image').src = `../images/quiz/${img}`;
    // 出典をセット
    if (src !== '') {
        quizEl.querySelector('.js-src').innerText = src;
    } else {
        // 出典がない場合は、出典を表示するエリアごと削除
        quizEl.querySelector('.js-src-area').style.display = 'none';
    }

    // 選択肢を入れるul要素を取得
    const choicesEl = quizEl.querySelector('.js-choices');
    // idの重複を避けるためにid属性を削除
    choicesEl.id = `choices${num}`;
    // 選択肢部分を生成
    choices.forEach((choice) => {
        // HTMLファイルから選択肢のテンプレートを取得しクローンを作成
        const choiceEl = document.getElementById('choiceTemplate').cloneNode(true);
        // idを更新
        choiceEl.id = `choice${num}_${choice.num}`;
        // 非表示用classNameを削除
        choiceEl.classList.remove('c-quiz__choice--hide');
        // 選択肢にonclick属性をセット
        choiceEl.setAttribute('onclick', `clickFn(${num}, ${choice.num}, ${ans})`);
        // 選択肢の文面をセット
        choiceEl.querySelector('.js-choice').innerText = choice.value;
        // 選択肢をul要素に挿入
        choicesEl.insertAdjacentElement('beforeend', choiceEl);
    });

    // 答え表示エリアのidをセット
    quizEl.querySelector('.js-answer-area').id = `answerArea${num}`;
    // 答え表示エリアの非表示用classNameを削除
    quizEl.querySelector('.js-answer-area').classList.add('c-quiz__answer-area--hide');
    // 答えタイトル(「正解！」or「不正解...」を表示する部分)のidをセット
    quizEl.querySelector('.js-answer-title').id = `answerTitle${num}`;
    /**
     * @type {{ num: number, value: string }} 答えの選択肢の連想配列を取得
     *  */
    const answerChoice = choices.find((choice) => choice.num === ans);
    // 答えの選択肢を表示エリアにセット
    quizEl.querySelector('.js-answer').innerText = answerChoice.value;

    return quizEl;
}

// quizzes配列の中身からクイズを生成して表示
quizzes.forEach((quiz) => {
    document.getElementById('quizArea').insertAdjacentElement('beforeend', createQuiz(quiz));
});
