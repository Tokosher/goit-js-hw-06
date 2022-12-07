const fontSizeControlInput = document.querySelector('#font-size-control');
const targetTextSpan = document.querySelector('#text');

fontSizeControlInput.addEventListener('input', (e) => {
    if (Number(e.target.value) === Number(targetTextSpan.style.fontSize)) return;
    targetTextSpan.style.fontSize = `${e.target.value}px`;
})
