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
 * @typedef{{ quizNumber: number, sentence: string, imageFileName: string, choices: {choiceNumber: number, choiceContent: string}[] correctChoiceNumber: number, reference: string }} Quiz
 * @param {Quiz} param0 quizzes: Quiz[]の要素: Quizを受け取ります
 * @returns {Node} クイズ1問分のNodeを返します
 */
const createQuiz = ({ quizNumber, sentence, imageFileName, choices, correctChoiceNumber, reference }) => {
    // HTMLファイルから問題のテンプレートを取得しクローンを作成
    const quizEl = document.getElementById('quizTemplate').cloneNode(true);
    // idの重複を避けるためにid属性を削除
    quizEl.removeAttribute('id');
    // 非表示用classNameを削除
    quizEl.classList.remove('c-quiz--hide');
    // 問題番号をセット
    quizEl.querySelector('.js-quiz-num').innerText = `Q${quizNumber}`;
    // 問題文をセット
    quizEl.querySelector('.js-quiz-title').innerText = sentence;
    // 画像をセット
    quizEl.querySelector('.js-image').src = `../images/quiz/${imageFileName}`;
    // 出典をセット
    if (reference !== '') {
        quizEl.querySelector('.js-src').innerText = reference;
    } else {
        // 出典がない場合は、出典を表示するエリアごと削除
        quizEl.querySelector('.js-src-area').style.display = 'none';
    }

    // 選択肢を入れるul要素を取得
    const choicesEl = quizEl.querySelector('.js-choices');
    // idの重複を避けるためにid属性を削除
    choicesEl.id = `choices${quizNumber}`;
    // 選択肢部分を生成
    choices.forEach((choice) => {
        // HTMLファイルから選択肢のテンプレートを取得しクローンを作成
        const choiceEl = document.getElementById('choiceTemplate').cloneNode(true);
        // idを更新
        choiceEl.id = `choice${quizNumber}_${choice.choiceNumber}`;
        // 非表示用classNameを削除
        choiceEl.classList.remove('c-quiz__choice--hide');
        // 選択肢にonclick属性をセット
        choiceEl.setAttribute('onclick', `clickFn(${quizNumber}, ${choice.choiceNumber}, ${correctChoiceNumber})`);
        // 選択肢の文面をセット
        choiceEl.querySelector('.js-choice').innerText = choice.choiceContent;
        // 選択肢をul要素に挿入
        choicesEl.insertAdjacentElement('beforeend', choiceEl);
    });

    // 答え表示エリアのidをセット
    quizEl.querySelector('.js-answer-area').id = `answerArea${quizNumber}`;
    // 答え表示エリアの非表示用classNameを削除
    quizEl.querySelector('.js-answer-area').classList.add('c-quiz__answer-area--hide');
    // 答えタイトル(「正解！」or「不正解...」を表示する部分)のidをセット
    quizEl.querySelector('.js-answer-title').id = `answerTitle${quizNumber}`;
    /**
     * @type {{ num: number, value: string }} 答えの選択肢の連想配列を取得
     *  */
    const answerChoice = choices.find((choice) => choice.choiceNumber === correctChoiceNumber);
    // 答えの選択肢を表示エリアにセット
    quizEl.querySelector('.js-answer').innerText = answerChoice.choiceContent;

    return quizEl;
}

/**
 * シャッフルされた配列を生成
 * @param {array} originalArray 元となる配列
 * @returns {array} シャッフルされた配列
 */
const generateShuffledArray = (originalArray) => {
    const array = [...originalArray];
    const newArray = [];
    while (array.length > 0) {
        const n = array.length;
        const k = Math.floor(Math.random() * n);

        newArray.push(array[k]);
        array.splice(k, 1);
    }
    return newArray;
}

/**
 * 問題の順番と選択肢の順番をシャッフルしたクイズデータ
 * @type {Quiz[]}
 */
const shuffledQuizzes = generateShuffledArray(quizzes).map((quiz, index) => {
    quiz.quizNumber = index + 1;
    quiz.choices = generateShuffledArray(quiz.choices);
    return quiz;
});

// quizzes配列の中身からクイズを生成して表示
shuffledQuizzes.forEach((quiz) => {
    document.getElementById('quizArea').insertAdjacentElement('beforeend', createQuiz(quiz));
});
