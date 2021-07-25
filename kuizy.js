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

//////////表示に関する部分////////////////////
for (let quizIndex = 0; quizIndex < QUIZ_LENGTH; quizIndex++) {
    let optionsLength = optionsTextArray[quizIndex].length;
    /**クイズタイトルと画像、選択肢を含ませるdiv要素 */
    let quizDiv = document.createElement('div');
    quizDiv.id = `quiz-div${quizIndex}`;
    document.body.appendChild(quizDiv);
    //クイズタイトルの表示
    let quizTitle = document.createElement('h2');
    quizTitle.innerHTML = `<span class="border-underline">${quizIndex + 1}.この地名はなんて読む？</span>`;
    quizDiv.appendChild(quizTitle);
    //画像の表示
    let placenameImg = document.createElement('img');
    placenameImg.src = `./img/photo${quizIndex}.png`;
    quizDiv.appendChild(placenameImg);
    //選択肢のul作成
    let optionsList = document.createElement('ul');
    optionsList.id = `options-quiz${quizIndex}`;
    quizDiv.appendChild(optionsList);
    //ランダムな配列を生成
    const shuffleArray = Array.from(new Array(optionsLength)).map((v, k) => k);
    for (let i = shuffleArray.length; 1 < i; i--) {
        j = Math.floor(Math.random() * i);
        [shuffleArray[j], shuffleArray[i - 1]] = [shuffleArray[i - 1], shuffleArray[j]];
    }
    //選択肢の表示
    for (let optionIndex = 0; optionIndex < optionsLength; optionIndex++) {
        optionsList.insertAdjacentHTML('beforeend', `<li id="option${quizIndex}-${shuffleArray[optionIndex]}" onclick="clickfunction(${quizIndex},${shuffleArray[optionIndex]})">${optionsTextArray[quizIndex][shuffleArray[optionIndex]]}`);
    }
    //回答ボックスの表示
    let resultDiv = document.createElement('div');
    resultDiv.id = `answerbox-div${quizIndex}`;
    document.body.appendChild(resultDiv);
}

//////////クリックした時実行する関数////////////////////
let clickfunction = function (quizNum, chosenOptionNum) {　//クリックすると3つの変数が更新される
    let clickedOption = document.getElementById(`option${quizNum}-${chosenOptionNum}`);　//クリックしたliを取得
    let correctOption = document.getElementById(`option${quizNum}-${CORRECT_NUM}`); //正解のliを取得
    let resultDiv = document.getElementById(`answerbox-div${quizNum}`);　//回答ボックスのdivを取得
    let optionsLength = document.getElementById(`options-quiz${quizNum}`).childElementCount; //該当設問における選択肢の個数を取得（基本3つ）
    //回答ボックスに入れる要素を作成
    let result = document.createElement('h3');
    let resultParagraph = document.createElement('p');
    //スタイルの追加
    resultDiv.classList.add('answer-box');
    result.classList.add('quiz-result-title');
    resultParagraph.classList.add('quiz-result-paragraph');
    //正解を表す文面をpタグに追加
    resultParagraph.innerHTML = `正解は「${correctOption.innerText}」です！`;
    //divの子要素として追加することで、実際に表示する
    resultDiv.appendChild(result);
    resultDiv.appendChild(resultParagraph);
    //選択肢のスタイル変更
    clickedOption.classList.add('clickedOption-red'); //クリックしたliを赤くする
    correctOption.classList.add('correctOption-blue'); //正解のliを青くする（正解を選んだ場合は上書きされる）
    //正誤判定
    if (CORRECT_NUM === chosenOptionNum) {
        result.innerHTML = '<span class="quiz-result-correct">正解！</span>'; //「正解！」を回答ボックスdiv内のh3タグに追加、スタイルも同時に追加
    } else {
        result.innerHTML = '<span class="quiz-result-incorrect">不正解！</span>'; //「不正解！」を回答ボックスdiv内のh3タグに追加、スタイルも同時に追加
    }
    //クリックできなくする
    for (let optionIndex = 0; optionIndex < optionsLength; optionIndex++) {
        document.getElementById(`option${quizNum}-${optionIndex}`).classList.add('cannotclick');
    };
}