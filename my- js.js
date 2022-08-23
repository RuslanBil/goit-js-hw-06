'use strict';
// const parent = document.querySelector('#parent');
// parent.addEventListener('click', () => {
//   alert('Обработчик родительского клика');
// });

// const child = document.querySelector('#child');
// child.addEventListener('click', () => {
//   alert('Детский дескриптор щелчка');
// });

// const descendant = document.querySelector('#descendant');
// descendant.addEventListener('click', () => {
//   alert('Детский дескриптор щелчка');
// // });
// const parent = document.querySelector('#parent');
// parent.addEventListener('click', () => {
//   alert(
//     'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!',
//   );
// });
// const child = document.querySelector('#child');
// child.addEventListener('click', () => {
//   alert(
//     'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"',
//   );
// });
// const descendant = document.querySelector('#descendant');
// descendant.addEventListener('click', event => {
//   event.stopPropagation();
//   alert('Descendant click handler');
// });
const output = document.querySelector('.output');
const colorPalette = document.querySelector('.color-palette');

colorPalette.addEventListener('click', selectColor);
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
}
