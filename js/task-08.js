const formEl = document.querySelector('.login-form');
console.log(formEl);
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.valeu === '') {
    return alert('Pleas all fields must be filled!');
  }

  const userData = { email: email.value, Password: password.value };
  console.log(userData);
  event.currentTarget.reset();
}
