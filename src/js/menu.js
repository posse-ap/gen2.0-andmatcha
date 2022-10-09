'use strict';

const hamburgerButton = document.getElementById('hamburgerButton');

// ボタンの見た目を切り替える処理
const switchButtonVisual = () => {
  const buttonClassName = 'p-header__hamburger-line--open';
  const buttonLines = document.querySelectorAll('.js-button-line');
  buttonLines.forEach((buttonLine) => {
    buttonLine.classList.toggle(buttonClassName);
  });
}

// メニューの表示/非表示を切り替える処理
const switchMenuVisibility = () => {
  const menuClassName = 'p-menu--open';
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  hamburgerMenu.classList.toggle(menuClassName);
}

// クリックした時の動作
hamburgerButton.addEventListener('click', () => {
  switchButtonVisual();
  switchMenuVisibility();
})
