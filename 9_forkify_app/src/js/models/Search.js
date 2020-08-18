class Search {
  constructor(queryWord) {
    this.queryWord = queryWord;
  }
  async getResults() {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${this.queryWord}`
    );
    const json = await response.json();
    const data = await json;
    this.result = data.recipes;
  }
}

export default Search;
