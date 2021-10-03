const quizArray = [
    ['たかなわ', 'こうわ', 'たかわ'],
    ['かめいど', 'かめと', 'かめど'],
    ['こうじまち', 'かゆまち', 'おかとまち'],
];

//TODO クリックした時の動作

function createQuiz(optionsArray, quizIndex, correctOptionIndex) {
    let contents = `<h2>${quizIndex + 1}この地名は何て読む？</h2>`
        + `<img src="./images/quiz${quizIndex}.png">`
        + `<ul>`;
    optionsArray.forEach(function (option, optionIndex) {
        contents += `<li onclick="clickfunction(${quizIndex}, ${optionIndex}, ${correctOptionIndex})">${option}</li>`
    });
    contents += `</ul>`
        + `<div id="answerBox">`
        + `<h3 id="answerTitle"></h3>`
        + `<p id="ansewerText">正解は${optionsArray[correctOptionIndex]}です！</p></div>`
    document.getElementById('main').insertAdjacentHTML('beforeend', contents);
    console.log(optionsArray)
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