const textFieldColor = document.querySelector('.widget p .color');
const changeColorButton = document.querySelector('.widget .change-color');

changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  textFieldColor.textContent = newColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

