const result = document.createElement('h3');
const resultParagraph = document.createElement('p');
result.classList.add('quiz-result-title');
resultParagraph.classList.add('quiz-result-paragraph');

//クリックした時の挙動
var clickfunction = function (questionNo, choicesNo, correct) {
    //クリックした選択肢を赤くする
    let clickedchoice = document.getElementById('choice' + questionNo + '-' + choicesNo);
    clickedchoice.style.color = '#fff';
    clickedchoice.style.backgroundColor = '#ff5128';

    let correctAnswer = document.getElementById('choice' +questionNo + '-' + correct); 
    let answerBox = document.getElementById('answer-box-' + questionNo);　//ここが問題？
    answerBox.classList.add('answer-box');
    answerBox.appendChild(result);
    answerBox.appendChild(resultParagraph);
    resultParagraph.innerHTML = '正解は「' + correctAnswer.innerText + '」です！'

   
    //正誤判定、正解の選択肢を青くする
    if (correct === choicesNo) {
        clickedchoice.style.backgroundColor = '#287dff';
        result.innerHTML = '<span class="quiz-result-correct">正解！</span>';
        // result.classList.add('quiz-result-correct');
        
    } else {
        correctAnswer.style.backgroundColor = '#287dff';
        correctAnswer.style.color = '#fff';
        result.innerHTML = '<span class="quiz-result-incorrect">不正解！</span>';
        // result.classList.add('quiz-result-incorrect');

    }

    //クリックできなくする
    for(let i = 0; i < 3; i++){
        document.getElementById('choice' + questionNo + '-' + i).classList.add('cannotclick');
    };
}