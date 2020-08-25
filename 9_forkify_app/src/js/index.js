import Search from './models/Search';
import Recipe from './models/Recipe';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';

// **** Global State of the App ****
// * Search object
// * Current recipe object
// * Shopping List Object
// * Liked recipes

const state = {};

// // **************************************************** Search Controller *********************
const controlSearch = async () => {
  // 1.Get a queryWord from the view
  const queryWord = searchView.getInput();

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

    try {
      // 4. Search for recipes
      await state.search.getResults();

      // 5.Render results on UI later/ now log to console
      // * 5.1 Clear the spinning loader
      clearLoader();
      // * 5.2 Search for recipes
      searchView.renderResults(state.search.result);
    } catch (err) {
      clearLoader();
      alert('Something went wrong with the server response');
    }
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

// // *************************************************** Recipe Controller **********************************
const controlRecipe = async () => {
  // Get ID from URL
  const id = window.location.hash.replace('#', '');
  console.log(id);

  if (id) {
    // Prepare the UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Highlight selected search item

    if (state.search) {
      searchView.highlightSelected(id);
    }

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data and parse ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calulate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // Render recipe to UI
      clearLoader();
      recipeView.renderRecipe(state.recipe);
    } catch (err) {
      alert(err);
    }
  }
};

//Add same event listeners to different events
['hashchange', 'load'].forEach((event) =>
  window.addEventListener(event, controlRecipe)
);
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
