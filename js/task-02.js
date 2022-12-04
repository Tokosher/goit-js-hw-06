const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientsElements = [];

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.innerText = ingredient;
  li.classList.add('item');
  ingredientsElements.push(li);
})

ingredientsList.append(...ingredientsElements);
