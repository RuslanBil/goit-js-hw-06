//1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
const categoriesEl = document.querySelectorAll(".item");
const lengthcategoriesEl = categoriesEl.length;
console.log(`Number of categories: ${lengthcategoriesEl}`);
//2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
const titleEl = categoriesEl.forEach((element) => {
  console.log(`Categories: ${element.firstElementChild.textContent}`);
  console.log(`Element: ${element.lastElementChild.children.length}`);
});
