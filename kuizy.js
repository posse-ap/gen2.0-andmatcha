//問題番号、選択肢番号は０から数えています
let quizNum;
let optionNum;
let correctNum;
let correctNum_array = [0, 1, 1, 0, 2, 2, 2, 0, 1, 0];
let correctText_array = [
['たかなわ', 'こうわ', 'たかわ'],
['かめど', 'かめいど', 'かめと'],
['かゆまち', 'こうじまち', 'おかとまち'],
['おなりもん', 'おかどもん', 'ごせいもん'],
['たたら', 'たたりき', 'とどろき'],
['いじい', 'せきこうい', 'しゃくじい'],
['ざっしき','ざっしょく', 'ぞうしき'],
['おかちまち', 'みとちょう', 'ごしろちょう'],
['ろっこつ', 'ししぼね', 'しこね'],
['こぐれ', 'こばく', 'こしゃく'],
];
const quizLength = 10;

//クイズタイトル、画像、選択肢、回答ボックスの表示
for (let i = 0; i < quizLength; i++) {
    /**クイズタイトルと画像、選択肢を含ませるdiv要素 */
    let quizDiv = document.createElement('div');
    quizDiv.id = `quiz-div${i}`;
    document.body.appendChild(quizDiv);

    let quizTitle = document.createElement('h2');
    quizTitle.innerHTML = `<span class="border-underline">${i + 1}.この地名はなんて読む？</span>`;
    quizDiv.appendChild(quizTitle);

    let placenameImg = document.createElement('img');
    placenameImg.src = `./img/photo${i}.png`;
    quizDiv.appendChild(placenameImg);

    let options = document.createElement('ul');
    options.id = `options-quiz${i}`;
    quizDiv.appendChild(options);
    options.innerHTML = `<li id="option${i}-0" onclick="clickfunction(${i},0,${correctNum_array[i]})">${correctText_array[i][0]}</li>
    <li id="option${i}-1" onclick="clickfunction(${i},1,${correctNum_array[i]})">${correctText_array[i][1]}</li>
    <li id="option${i}-2" onclick="clickfunction(${i},2,${correctNum_array[i]})">${correctText_array[i][2]}</li>`;

    let answerBoxDiv = document.createElement('div');
    answerBoxDiv.id = `answerbox-div${i}`;
    document.body.appendChild(answerBoxDiv);

    document.body.appendChild(document.createElement('br'));
}

//クリックした時の挙動
let clickfunction = function (quizNum, optionNum, correctNum) {　//クリックすると3つの変数が更新される
    let clickedOption = document.getElementById(`option${quizNum}-${optionNum}`);　//クリックしたliを取得
    let correctAnswer = document.getElementById(`option${quizNum}-${correctNum}`); //正解のliを取得
    let answerBoxDiv = document.getElementById(`answerbox-div${quizNum}`);　//回答ボックスのdivを取得
    let optionsLength = document.getElementById(`options-quiz${quizNum}`).childElementCount; //該当設問における選択肢の個数を取得（基本3つ）

    //回答ボックスに入れる要素を作成
    let result = document.createElement('h3');
    let resultParagraph = document.createElement('p');

    //回答済の全ての問題の回答ボックスへの表示を行う
    let answerBox_array = [answerBoxDiv]
    answerBox_array.forEach(answerBoxDiv => {
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

    clickedOption.classList.add('clickedOption-red'); //クリックしたliを赤くする
    correctAnswer.classList.add('correctOption-blue'); //正解のliを青くする（正解を選んだ場合は上書きされる）

    //正誤判定
    if (correctNum === optionNum) {
        result.innerHTML = '<span class="quiz-result-correct">正解！</span>'; //「正解！」を回答ボックスdiv内のh3タグに追加、スタイルも同時に追加
        console.log('正解を選択しました');
    } else {
        result.innerHTML = '<span class="quiz-result-incorrect">不正解！</span>'; //「不正解！」を回答ボックスdiv内のh3タグに追加、スタイルも同時に追加
        console.log('不正解を選択しました');
    }

    //クリックできなくする
    for (let j = 0; j < optionsLength; j++) {
        document.getElementById(`option${quizNum}-${j}`).classList.add('cannotclick');
    };

    //ログ表示
    console.log(`第${quizNum}問　この設問の選択肢は${optionsLength}つあります\n選択:${optionNum} 正解:${correctNum}`);
}