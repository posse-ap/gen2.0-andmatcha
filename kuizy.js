let quizNum;
let chosenOptionNum;
const optionsTextArray = [
    ['たかなわ', 'こうわ', 'たかわ'],
    ['かめいど', 'かめど', 'かめと'],
    ['こうじまち', 'かゆまち', 'おかとまち'],
    ['おなりもん', 'おかどもん', 'ごせいもん'],
    ['とどろき', 'たたりき', 'たたら'],
    ['しゃくじい', 'せきこうい', 'いじい'],
    ['ぞうしき', 'ざっしょく', 'ざっしき'],
    ['おかちまち', 'みとちょう', 'ごしろちょう'],
    ['ししぼね', 'ろっこつ', 'しこね'],
    ['こぐれ', 'こばく', 'こしゃく'],
];
const QUIZ_LENGTH = optionsTextArray.length;
const CORRECT_NUM = 0;
const container = document.getElementById('quiz-container');

//////////表示に関する部分////////////////////
for (let quizIndex = 0; quizIndex < QUIZ_LENGTH; quizIndex++) {
    const optionsLength = optionsTextArray[quizIndex].length;
    /**クイズタイトルと画像、選択肢を含ませるdiv要素 */
    const quizDiv = document.createElement('div');
    quizDiv.id = `quiz-div${quizIndex}`;
    quizDiv.classList.add('quiz-box');
    container.appendChild(quizDiv);
    //クイズタイトルの表示
    const quizTitle = document.createElement('h2');
    quizTitle.innerText = `${quizIndex + 1}.この地名はなんて読む？`;
    quizTitle.classList.add('quiz-title');
    quizDiv.appendChild(quizTitle);
    //画像の表示
    const placenameImg = document.createElement('img');
    placenameImg.src = `img/photo${quizIndex}.png`;
    quizDiv.appendChild(placenameImg);
    //選択肢のul作成
    const optionsList = document.createElement('ul');
    optionsList.id = `options-quiz${quizIndex}`;
    optionsList.classList.add('options-list');
    quizDiv.appendChild(optionsList);
    //ランダムな配列を生成
    const shuffleArray = Array.from(new Array(optionsLength)).map((v, k) => k);
    for (let i = shuffleArray.length; 1 < i; i--) {
        j = Math.floor(Math.random() * i);
        [shuffleArray[j], shuffleArray[i - 1]] = [shuffleArray[i - 1], shuffleArray[j]];
    }
    //選択肢の表示
    for (let optionIndex = 0; optionIndex < optionsLength; optionIndex++) {
        optionsList.insertAdjacentHTML('beforeend', `<li id="option${quizIndex}-${shuffleArray[optionIndex]}" class="option-item" onclick="clickfunction(${quizIndex},${shuffleArray[optionIndex]})">${optionsTextArray[quizIndex][shuffleArray[optionIndex]]}`);
    }
    //回答ボックスの表示
    const resultDiv = document.createElement('div');
    resultDiv.id = `answerbox-div${quizIndex}`;
    container.appendChild(resultDiv);
}

//////////クリックした時実行する関数////////////////////
const clickfunction = function (quizNum, chosenOptionNum) {
    const clickedOption = document.getElementById(`option${quizNum}-${chosenOptionNum}`);　//クリックしたliを取得
    const correctOption = document.getElementById(`option${quizNum}-${CORRECT_NUM}`); //正解のliを取得
    const resultDiv = document.getElementById(`answerbox-div${quizNum}`);　//回答ボックスのdivを取得
    const optionsLength = document.getElementById(`options-quiz${quizNum}`).childElementCount; //該当設問における選択肢の個数を取得（基本3つ）
    //回答ボックスに入れる要素を作成
    const result = document.createElement('h3');
    const resultParagraph = document.createElement('p');
    //スタイルの追加
    resultDiv.classList.add('result-box');
    result.classList.add('result-title');
    resultParagraph.classList.add('result-text');
    //正解を表す文面をpタグに追加
    resultParagraph.innerHTML = `正解は「${correctOption.innerText}」です！`;
    //divの子要素として追加することで、実際に表示する
    resultDiv.appendChild(result);
    resultDiv.appendChild(resultParagraph);
    //選択肢にスタイルを追加
    clickedOption.classList.add('clicked-option');
    correctOption.classList.add('correct-option');
    //正誤判定
    if (CORRECT_NUM === chosenOptionNum) {
        result.innerHTML = '正解！';
        result.style.borderBottom = 'solid 3px #287dff';
    } else {
        result.innerHTML = '不正解！';
        result.style.borderBottom = 'solid 3px #ff5128';
    }
    //クリックできなくする
    for (let optionIndex = 0; optionIndex < optionsLength; optionIndex++) {
        document.getElementById(`option${quizNum}-${optionIndex}`).classList.add('cannot-click');
    };
}
