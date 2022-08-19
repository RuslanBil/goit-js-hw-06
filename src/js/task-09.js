const changeColorButtonEl = document.querySelector('.change-color');
console.log(changeColorButtonEl);
const bodyEl = document.querySelector('body');
console.log(bodyEl);
const spColorEl = document.querySelector('.color');
console.log(spColorEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
changeColorButtonEl.addEventListener('click', (e) => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spColorEl.textContent = color;
});
