import Search from './models/Search';
import { elements } from './views/base';
import * as searchView from './views/searchView';

// **** Global State of the App ****
// * Search object
// * Current recipe object
// * Shopping List Object
// * Liked recipes

const state = {};

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

    // 4. Search for recipes
    await state.search.getResults();

    // *** 5.Render results on UI later/ now log to console
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});
