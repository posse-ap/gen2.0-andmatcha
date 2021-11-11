'use strict';

// ボタンとモーダルの要素を取得
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const modalBg = document.getElementById('modal_background');
const modal = document.getElementById('modal');
const postButton = document.getElementById('postButton');
const loading = document.getElementById('loading');
const done = document.getElementById('done');

// ヘッダーの記録・投稿ボタンを押すと
openButton.addEventListener('click', () => {
    modalBg.classList.remove('hide');
    modal.classList.remove('hide');
    closeButton.classList.remove('hide');
});

// 閉じるボタン
closeButton.addEventListener('click', () => {
    modalBg.classList.add('hide');
    modal.classList.add('hide');
    done.classList.add('hide');
    closeButton.classList.add('hide');
});

// 記録・投稿ボタンを押したあとsetTimeoutで発火
function resetModal () {
    modal.classList.add('hide');
    loading.classList.add('hide');
    done.classList.remove('hide');
}

// モーダルの中の記録・投稿ボタンを押すと
postButton.addEventListener('click', () => {
    modal.classList.add('hide');
    loading.classList.remove('hide');
    setTimeout('resetModal()', 1300);
});

//モーダルの中の選択肢たちはクリックされると色が変わる
function clickOption (optionNum) {
    const clickedOption = document.getElementById(`option${optionNum}`);
    const clickedCheckBox = document.getElementById(`checkbox${optionNum}`);
    clickedOption.classList.toggle('clicked_option');
    clickedCheckBox.classList.toggle('clicked_checkbox');
}

function clickTweetOption () {
    const tweetOption = document.getElementById('tweetOption');
    const tweetCheckbox = document.getElementById('tweetCheckbox');
    tweetCheckbox.classList.toggle('clicked_checkbox');

    if (tweetOption.hasAttribute('checked')) {
        tweetOption.removeAttribute('checked');
    } else {
        tweetOption.setAttribute('checked', '');
    }
}

function tweet () {
    const inputArea = document.getElementById('inputArea').value;
    const tweetOption = document.getElementById('tweetOption'); //Twitterにシェアするチェックボックス
    if (tweetOption.hasAttribute('checked')) {
        window.open("https://twitter.com/intent/tweet?text=" + inputArea);
    }
}