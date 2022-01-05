function clickfunction(questionId, clickedChoiceId, valid) {
    //選択肢の色を変える
    const clickedChoice = document.getElementById(`choice${questionId}_${clickedChoiceId}`);
    clickedChoice.classList.add('clicked-choice');
    const validChoice = document.getElementById(`choice${questionId}_1`);
    validChoice.classList.add('valid-choice');
    //クリック無効化
    const choices = document.querySelectorAll(`#choices${questionId} li`);
    choices.forEach((li) =>{
        li.style.pointerEvents = 'none';
    });

    //ボックスを表示する
    const resultTitle = document.getElementById(`result_title${questionId}`);
    if(valid) {
        resultTitle.innerText = '正解！';
        resultTitle.style.borderBottom = 'solid 3px #287dff';
    } else {
        resultTitle.innerText = '不正解！';
        resultTitle.style.borderBottom = 'solid 3px #ff5128';
    }
    const resultBox = document.getElementById(`result_box${questionId}`);
    resultBox.classList.remove('hide');
}