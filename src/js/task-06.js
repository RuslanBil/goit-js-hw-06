const idInput = document.querySelector('#validation-input');
idInput.addEventListener('focus', () => {
  idInput.classList.remove('valid', 'invalid');
  idInput.value = '';
});

idInput.addEventListener('blur', () => {
  const isValid = idInput.value.length === +idInput.dataset.length;
  const addClass = isValid ? 'valid' : 'invalid';
  idInput.classList.add(addClass);
});
