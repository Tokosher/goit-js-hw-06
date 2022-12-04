const decrementButtons = document.querySelectorAll("[data-action]");
const valueField = document.querySelector('#value');

for (const button of decrementButtons) {
    button.addEventListener('click', incrementDecrementButtonsHandler.bind(this, button.dataset.action))
}

/**
 * @param action - type: string -> 'increment' | 'decrement'
 */
let counterValue = 0;
function incrementDecrementButtonsHandler (action) {
    switch (action) {
        case 'increment':
            counterValue++;
            break;

        case 'decrement':
            counterValue--;
            break;
    }

    valueField.textContent = counterValue.toString();
}
