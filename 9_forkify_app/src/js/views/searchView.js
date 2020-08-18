import { elements } from './base';

export const getInput = () => elements.searchInput.value;
export const renderResults = (recipes) => {
  recipes.forEach(renderRecipe);
};
export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResultList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
  const reduceTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((acc, word) => {
      if (acc + word.length <= limit) {
        reduceTitle.push(word);
      }
      return acc + word.length;
    }, 0);
    return `${reduceTitle.join(' ')} ...`;
  }
  return title;
};

const renderRecipe = (recipe) => {
  const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
  elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};
