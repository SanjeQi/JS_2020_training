import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';

// **** Global State of the App ****
// * Search object
// * Current recipe object
// * Shopping List Object
// * Liked recipes

const state = {};
window.state = state;

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

// // *************************************************** List Controller **********************************

const controlList = () => {
  // Create a new list if there is none yet
  if (!state.list) state.list = new List();

  // Add each ingredient to the list and UI
  state.recipe.ingredients.forEach((el) => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// Handle delete and update list item events
elements.shopping.addEventListener('click', (e) => {
  const id = e.target.closest('.shopping__item').dataset.itemid;

  // Handle the delete button
  if (e.target.matches('.shopping__delete, .shopping__delete *')) {
    // Delete from state
    state.list.deleteItem(id);
    // Delete from UI
    listView.deleteItem(id);
    //Update ingredient amount value- count handle
  } else if (e.target.matches('.shopping__count-value')) {
    const val = parseFloat(e.target.value);
    state.list.updateCount(id, val);
  }
});

// // *************************************************** Like Controller **********************************
const controlLike = () => {
  if (!state.likes) state.likes = new Likes();
  const currentID = state.recipe.id;

  // User has NOT yet liked current recipe
  if (!state.likes.isLiked(currentID)) {
    // Add like to state
    const newLike = state.likes.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );
    // Toggle like button
    // Add like to the UI list
    console.log(state.likes);
    // User HAS  liked current recipe
  } else {
    // Remove like from state
    state.likes.deleteLike(currentID);
    // Toggle like button
    // Remove like from UI list
    console.log(state.likes);
  }
};
// *************************** Handling recipe button clicks - increase and decrease servings
elements.recipe.addEventListener('click', (e) => {
  //if target matches the button-decrease or any childs of btn-decrease
  if (e.target.matches('.btn-decrease, .btn-decrease *')) {
    // Decrease button is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings('dec');
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches('.btn-increase, .btn-increase *')) {
    // Increase button is clicked

    state.recipe.updateServings('inc');
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
    //Add ingredients to shopping list
    controlList();
  } else if (e.target.matches('.recipe__love, .recipe__love *')) {
    // Like Controller
    controlLike();
  }
});
