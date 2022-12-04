const ulCategoriesList = document.querySelector('#categories');

/**
 * #1
 * We have 2 ways to do it: childElementCount or children.length. Let's use the first one
 * @type {number}
 */
const ulCategoriesListChildrenAmount = ulCategoriesList.childElementCount;
console.log(`Number of categories: ${ulCategoriesListChildrenAmount}`);

// #2
for (const element of ulCategoriesList.children) {
    const headerText = element.querySelector('h2').textContent;
    const listAmount = element.querySelector('ul').childElementCount;

    console.log(`
    Category: ${headerText}
    Elements: ${listAmount}
    `);
}
