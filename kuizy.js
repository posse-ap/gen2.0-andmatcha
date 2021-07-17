//クリックした時の挙動
var clickfunction = function (questionNo, choicesNo, correct) {　//クリックすると3つの変数が更新される
    let clickedchoice = document.getElementById('choice' + questionNo + '-' + choicesNo);　//クリックしたliを取得
    let correctAnswer = document.getElementById('choice' + questionNo + '-' + correct); //正解のliを取得
    let answerBox = document.getElementById('answer-box-' + questionNo);　//回答ボックスのdivを取得
    
    //回答ボックスに入れる要素を作成
    let result = document.createElement('h3');
    let resultParagraph = document.createElement('p');
    
    //回答済の全ての問題の回答ボックスへの表示を行う
    let answerBox_array = [answerBox]
    answerBox_array.forEach(answerBox => {
        //スタイルの追加
        answerBox.classList.add('answer-box');
        result.classList.add('quiz-result-title');
        resultParagraph.classList.add('quiz-result-paragraph');
        //正解を表す文面をpタグに追加
        resultParagraph.innerHTML = '正解は「' + correctAnswer.innerText + '」です！';
        //divの子要素として追加することで、実際に表示する
        answerBox.appendChild(result);
        answerBox.appendChild(resultParagraph);
    });
    
    clickedchoice.classList.add('clickedchoice-red'); //クリックしたliを赤くする
    correctAnswer.classList.add('correctchoice-blue'); //正解のliを青くする（正解を選んだ場合は上書きされる）

    //正誤判定
    if (correct === choicesNo) {
        result.innerHTML = '<span class="quiz-result-correct">正解！</span>'; //「正解！」を回答ボックスdiv内のh3タグに追加、スタイルも同時に追加
        console.log('正解を選択しました');
    } else {
        result.innerHTML = '<span class="quiz-result-incorrect">不正解！</span>'; //「不正解！」を回答ボックスdiv内のh3タグに追加、スタイルも同時に追加
        console.log('不正解を選択しました');
    }

    //クリックできなくする
    var choicesLength = document.getElementById('choices-q' + questionNo).childElementCount; //該当設問における選択肢の個数を取得（基本3つ）
    for (let i = 0; i < choicesLength; i++) {
        document.getElementById('choice' + questionNo + '-' + i).classList.add('cannotclick');
    };

    console.log('第' + questionNo + '問　この設問の選択肢は' + choicesLength + 'つあります　選択:' + choicesNo + '正解:' + correct);

}