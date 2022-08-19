const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrayItems = [];
const ulEl = document.querySelector('#ingredients');

for (let ingredient of ingredients) {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  arrayItems.push(liEl);
  console.log(liEl);
}

ulEl.append(...arrayItems);
console.log(ulEl);
