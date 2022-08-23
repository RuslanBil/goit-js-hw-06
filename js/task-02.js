const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');
const arrayItems = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = `${ingredient}`;
  console.log(liEl);
  return liEl;
});
ulEl.append(...arrayItems);
console.log(ulEl);

// for (let ingredient of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.classList.add('item');
//   liEl.textContent = ingredient;
//   arrayItems.push(liEl);
//   console.log(liEl);
// }
