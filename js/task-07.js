const fontSizeControlInput = document.querySelector('#font-size-control');
const targetTextSpan = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', (e) => {
    if (+e.target.value === +targetTextSpan.style.fontSize) return;
    targetTextSpan.style.fontSize = `${e.target.value}px`;
})
