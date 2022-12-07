/**
 * We define constants to easy change in the future (if it's needed)
 * @type {number}
 */
const START_BLOCK_WIDTH = 30;
const START_BLOCK_HEIGHT = 30;
const INCREASING_STEP = 10;

const blocksArea = document.querySelector('#boxes');
const controlInput = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', createButtonHandler);
destroyButton.addEventListener('click', destroyBoxes);

function createButtonHandler () {
    createBoxes(Number(controlInput.value));
}

function destroyBoxes () {
    if (blocksArea.children.length) blocksArea.replaceChildren();
}

function createBoxes(amount) {
    if (amount < Number(controlInput.min) || amount > Number(controlInput.max)) {
        alert(`Range of numbers between ${controlInput.min} and ${controlInput.max}!`)
        return;
    }

    // call function with checking inside if it's needed
    destroyBoxes();

    const blocksElementsHTML = [];

    for (let i = 0; i < amount; i++) {
        blocksElementsHTML.push(`<div style="height: ${START_BLOCK_HEIGHT + INCREASING_STEP * i}px; width: ${START_BLOCK_WIDTH + INCREASING_STEP * i}px;
                                             background: ${randomHsl()}"></div>`);
    }

    blocksArea.insertAdjacentHTML('afterbegin', blocksElementsHTML.join(''));
}

/**
 * I need to replace your color function, because div's not working with 5-length HEX codes
 * @returns {string}
 */
function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}
