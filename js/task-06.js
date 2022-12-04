const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', (e) => {
    const isValid = +validationInput.dataset.length === e.target.value.length;
    const validationResult = isValid ? 'valid' : 'invalid';
    if (validationInput.classList.contains(validationResult)) return;

    // that type of check can be valid if we don't add any other classes to the input, in other case - it's will not work
    if (validationInput.classList.length) { // that means we have wrong class
        validationInput.classList.replace(isValid ? 'invalid' : 'valid', validationResult);
    } else { // that means we have no classes inside validation input
        validationInput.classList.add(validationResult);
    }
})
