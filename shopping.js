'use strict';

const shopping = document.querySelector('.shopping');
const main = document.querySelector('.main');
const input = document.querySelector('input');
const button = document.querySelector('.bottom button');
const deleteAll = document.querySelector('header button');

function mainEvent() {
  if (input.value === '') {
    input.focus();
    return;
  }

  const mainBox = document.createElement('div');
  const mainText = document.createElement('span');
  const mainButton = document.createElement('button');
  const trashImg = document.createElement('i');

  mainBox.setAttribute('class', 'main_box');
  mainText.setAttribute('class', 'main_text');
  mainButton.setAttribute('class', 'main_button');
  trashImg.setAttribute('class', 'fas fa-trash-alt');

  main.appendChild(mainBox);
  mainBox.appendChild(mainText);
  mainBox.appendChild(mainButton);
  mainButton.appendChild(trashImg);

  mainText.innerHTML = input.value;
  input.value = '';
  input.focus();
  mainButton.addEventListener(
    'click',
    () => {
      mainBox.parentNode.removeChild(mainBox);
    },
    false
  );

  deleteAll.addEventListener('click', () => {
    main.removeChild(mainBox);
  });
}

button.addEventListener('click', () => {
  mainEvent();
});

input.addEventListener('keyup', () => {
  if (event.keyCode === 13) {
    mainEvent();
  }
});
