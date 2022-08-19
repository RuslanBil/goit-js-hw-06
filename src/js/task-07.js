const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', () => {
  const size = inputEl.value;
  console.log(size);
  spanEl.style.fontSize = size + 'px';
});

// const controlFont = document.querySelector('#font-size-control');

// const text = document.querySelector('#text');

// controlFont.oninput = function () {
//   text.style.fontSize = controlFont.value + 'px';
// };

//-------------------------------------------
// const textEl = document.getElementById('text');

// const inputEl = document.getElementById('font-size-control');

// inputEl.addEventListener('input', (e) => {
//   const size = inputEl.value;
//   console.log(size);

//   textEl.style.fontSize = size + 'px';
// });
