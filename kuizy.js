//問題番号、選択肢番号は０から数えています。
let quizNum;
let optionNum;
const correctNum = 0;
const quizLength = 10;
const optionTextArray = [
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

//////////表示に関する部分////////////////////
for (let k = 0; k < quizLength; k++) {
    /**クイズタイトルと画像、選択肢を含ませるdiv要素 */
    let quizDiv = document.createElement('div');
    quizDiv.id = `quiz-div${k}`;
    document.body.appendChild(quizDiv);
    //クイズタイトルの表示
    let quizTitle = document.createElement('h2');
    quizTitle.innerHTML = `<span class="border-underline">${k + 1}.この地名はなんて読む？</span>`;
    quizDiv.appendChild(quizTitle);
    //画像の表示
    let placenameImg = document.createElement('img');
    placenameImg.src = `./img/photo${k}.png`;
    quizDiv.appendChild(placenameImg);
    //選択肢のul作成
    let options = document.createElement('ul');
    options.id = `options-quiz${k}`;
    quizDiv.appendChild(options);
    //ランダムな配列を生成
    shuffleArray = [0, 1, 2];
    for (let i = shuffleArray.length; 1 < i; i--) {
        j = Math.floor(Math.random() * i);
        [shuffleArray[j], shuffleArray[i - 1]] = [shuffleArray[i - 1], shuffleArray[j]];
    }
    //選択肢の表示
    for (let l = 0; l < 3; l++) {
        options.insertAdjacentHTML('beforeend', `<li id="option${k}-${shuffleArray[l]}" onclick="clickfunction(${k},${shuffleArray[l]})">${optionTextArray[k][shuffleArray[l]]}`)
    }
    //回答ボックスの表示
    let answerBoxDiv = document.createElement('div');
    answerBoxDiv.id = `answerbox-div${k}`;
    document.body.appendChild(answerBoxDiv);

    document.body.appendChild(document.createElement('br'));
}

//////////クリックした時実行する関数////////////////////
let clickfunction = function (quizNum, optionNum) {　//クリックすると3つの変数が更新される
    let clickedOption = document.getElementById(`option${quizNum}-${optionNum}`);　//クリックしたliを取得
    let correctAnswer = document.getElementById(`option${quizNum}-${correctNum}`); //正解のliを取得
    let answerBoxDiv = document.getElementById(`answerbox-div${quizNum}`);　//回答ボックスのdivを取得
    let optionsLength = document.getElementById(`options-quiz${quizNum}`).childElementCount; //該当設問における選択肢の個数を取得（基本3つ）
    //回答ボックスに入れる要素を作成
    let result = document.createElement('h3');
    let resultParagraph = document.createElement('p');
    //回答済の全ての問題の回答ボックスへの表示を行う
    let answerBoxArray = [answerBoxDiv]
    answerBoxArray.forEach(answerBoxDiv => {
        //スタイルの追加
        answerBoxDiv.classList.add('answer-box');
        result.classList.add('quiz-result-title');
        resultParagraph.classList.add('quiz-result-paragraph');
        //正解を表す文面をpタグに追加
        resultParagraph.innerHTML = `正解は「${correctAnswer.innerText}」です！`;
        //divの子要素として追加することで、実際に表示する
        answerBoxDiv.appendChild(result);
        answerBoxDiv.appendChild(resultParagraph);
    });
    //選択肢のスタイル変更
    clickedOption.classList.add('clickedOption-red'); //クリックしたliを赤くする
    correctAnswer.classList.add('correctOption-blue'); //正解のliを青くする（正解を選んだ場合は上書きされる）
    //正誤判定
    if (correctNum === optionNum) {
        result.innerHTML = '<span class="quiz-result-correct">正解！</span>'; //「正解！」を回答ボックスdiv内のh3タグに追加、スタイルも同時に追加
        // console.log('正解を選択しました');
    } else {
        result.innerHTML = '<span class="quiz-result-incorrect">不正解！</span>'; //「不正解！」を回答ボックスdiv内のh3タグに追加、スタイルも同時に追加
        // console.log('不正解を選択しました');
    }
    //クリックできなくする
    for (let m = 0; m < optionsLength; m++) {
        document.getElementById(`option${quizNum}-${m}`).classList.add('cannotclick');
    };

    //ログ表示
    // console.log(`第${quizNum + 1}問　この設問の選択肢は${optionsLength}つあります\n選択:${optionNum} 正解:${correctNum}`);
}
