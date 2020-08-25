import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResultList.innerHTML = '';
  elements.searchResPages.innerHTML = '';
};

export const highlightSelected = (id) => {
  const resultArr = Array.from(document.querySelectorAll('.results__link'));
  resultArr.forEach((el) => {
    el.classList.remove('results__link--active');
  });

  document
    .querySelector(`a[href='#${id}']`)
    .classList.add('results__link--active');
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

// type: 'prev' or 'next'
const createButtonPage = (page, type) => `
  <button class="btn-inline results__btn--${type}" data-goto=${
  type === 'prev' ? page - 1 : page + 1
}>
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>  
      <svg class="search__icon">
          <use href="img/icons.svg#icon-triangle-${
            type === 'prev' ? 'left' : 'right'
          }"></use>
      </svg>
  </button>              
`;

const rederPageButtons = (page, numResults, resPerPage) => {
  let buttonPage;
  // I need to know on what page we are and how many pages there are
  const pages = Math.ceil(numResults / resPerPage);
  if (page === 1 && pages > 1) {
    // Only want one button to go to next page
    buttonPage = createButtonPage(page, 'next');
  } else if (page < pages) {
    // Both buttons
    buttonPage = `${createButtonPage(page, 'prev')} ${createButtonPage(
      page,
      'next'
    )}`;
  } else if (page === pages && pages > 1) {
    // Only want one button to go to the previous page
    buttonPage = createButtonPage(page, 'prev');
  }
  elements.searchResPages.insertAdjacentHTML('afterbegin', buttonPage);
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

export const renderResults = (recipes, page = 1, resultPerPage = 10) => {
  // Render result of current page
  const start = (page - 1) * resultPerPage;
  const end = page * resultPerPage;
  recipes.slice(start, end).forEach(renderRecipe);

  // Render page pagination buttons
  rederPageButtons(page, recipes.length, resultPerPage);
};
