const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const counterValue = document.querySelector('#value');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');

buttonIncrement.addEventListener('click', () => {
  console.log('increment: +1');
  counter.increment();
  counterValue.textContent = counter.value;
});
buttonDecrement.addEventListener('click', () => {
  console.log('increment: -1');
  counter.decrement();
  counterValue.textContent = counter.value;
});
