const quizArray = [
    ['たかなわ', 'こうわ', 'たかわ'],
    ['かめいど', 'かめと', 'かめど'],
    ['こうじまち', 'かゆまち', 'おかとまち'],
];

//TODO クリックした時の動作
function clickfunction (quizIndex, clickedOptionIndex, correctOptionIndex) {
    //クリック無効化
    document.getElementsByName(`options[${quizIndex}]`).forEach(function (value, index) {
        document.getElementById(`option${quizIndex}_${index}`).style.pointerEvents = 'none';
    });
    //クリックした選択肢の見た目を変える
    document.getElementById(`option${quizIndex}_${clickedOptionIndex}`).className = 'clicked_option';
    //正解の選択肢の見た目を変える
    document.getElementById(`option${quizIndex}_${correctOptionIndex}`).className = 'correct_option';
    //回答ボックスの表示
    document.getElementById(`answerBox${quizIndex}`).classList.remove('hide');
    // document.getElementById('answerText').classList.remove('hide');
    const answerTitle = document.getElementById(`answerTitleInner${quizIndex}`);
    if (clickedOptionIndex === correctOptionIndex) {
        answerTitle.innerText = '正解！';
        answerTitle.style.borderColor = '#afdddd';
    } else {
        answerTitle.innerText = '不正解！';
        answerTitle.style.borderColor = '#ffbdaa';
    }
}

function createQuiz(optionsArray, quizIndex, correctOptionIndex) {
    let contents = `<h2>${quizIndex + 1}.この地名は何て読む？</h2>`
        + `<p class="img_box"><img src="./images/quiz${quizIndex}.png"></p>`
        + `<ul>`;
    optionsArray.forEach(function (option, optionIndex) {
        contents += `<li onclick="clickfunction(${quizIndex}, ${optionIndex}, ${correctOptionIndex})" name="options[${quizIndex}]" id="option${quizIndex}_${optionIndex}">${option}</li>`
    });
    contents += `</ul>`
        + `<div id="answerBox${quizIndex}" class="answer_box hide">`
        + `<h3 class="answer_title"><span id="answerTitleInner${quizIndex}" class="answer_title_inner"></span></h3>`
        + `<p id="ansewerText" class="answer_text">正解は${optionsArray[correctOptionIndex]}です！</p></div>`
    document.getElementById('main').insertAdjacentHTML('beforeend', contents);
}

function createHTML() {
    quizArray.forEach(function (optionsArray, quizIndex) {
        answer = optionsArray[0];
        for (let i = optionsArray.length - 1; i > 0; i--) {
            let r = Math.floor(Math.random() * (i + 1));
            let tmp = optionsArray[i];
            optionsArray[i] = optionsArray[r];
            optionsArray[r] = tmp;
        }
        createQuiz(optionsArray, quizIndex, optionsArray.indexOf(answer));
    });
}

window.onload = createHTML();