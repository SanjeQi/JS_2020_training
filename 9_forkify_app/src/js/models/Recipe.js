export default class Recipe {
  constructor(id) {
    this.id = id;
  }
  async getRecipe() {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      )
        .then((response) => response.json())
        .then((data) => data);
      this.result = res.recipe;
      this.title = res.recipe.title;
      this.author = res.recipe.publisher;
      this.img = res.recipe.image_url;
      this.url = res.recipe.source_url;
      this.ingredients = res.recipe.ingredients;
    } catch (error) {
      alert(error);
    }
  }
  calcCookTime() {
    // Assuming that we need 15 min per each 3 ingredients
    const numIngr = this.ingredients.length;
    const periods = Math.ceil(numIngr / 3);
    this.time = periods * 15;
  }
  calcServings() {
    this.servings = 4;
  }
}
