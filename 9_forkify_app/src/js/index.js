import Search from './models/Search';
import Recipe from './models/Recipe';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';

// **** Global State of the App ****
// * Search object
// * Current recipe object
// * Shopping List Object
// * Liked recipes

const state = {};

// // **************************************************** Search Controller *********************
const controlSearch = async () => {
  // 1.Get a queryWord from the view
  const queryWord = searchView.getInput(); // TODO
  console.log(queryWord);

  if (queryWord) {
    // 2.New search object and add it to this.state.
    state.search = new Search(queryWord);

    // 3.Prepare UI for Results
    // * 3.1 Clear the input Field
    searchView.clearInput();
    // * 3.2 Clear previous results
    searchView.clearResults();
    // * 3.3 Add loader spinner before search results are loaded
    renderLoader(elements.searchRes);

    // 4. Search for recipes
    await state.search.getResults();

    // 5.Render results on UI later/ now log to console
    // * 5.1 Clear the spinning loader
    clearLoader();
    // * 5.2 Search for recipes
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
    console.log(goToPage);
  }
});

// // ****************************************** Recipe Controller **********************************
const controlRecipe = async () => {
  // Get ID from URL
  const id = window.location.hash.replace('#', '');
  console.log(id);

  if (id) {
    // Prepare the UI for changes
    // Create new recipe object
    state.recipe = new Recipe(id);
    // Get recipe data
    await state.recipe.getRecipe();
    // Calulate servings and time
    state.recipe.calcCookTime();
    state.recipe.calcServings();
    // Render recipe to UI
    console.log(state.recipe);
  }
};

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
