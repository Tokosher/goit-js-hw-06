const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', e => {
    const inputValue = e.target.value;
    nameOutput.textContent = inputValue.length ? inputValue : 'Anonymous';
})
