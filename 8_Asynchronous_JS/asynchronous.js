//---------------------------------------------Asynchronous JS with callbacks
function getRecipe() {
  setTimeout(() => {
    const recipeID = [523, 883, 432, 974];
    console.log(recipeID);
    setTimeout(
      (id) => {
        const recipe = { title: 'Frash Tomato Pasta', cook: 'Bono' };
        console.log(`${id}: ${recipe.title}`);
        setTimeout(
          (cook) => {
            const recipe2 = { title: 'Italian Pizza', cook: 'Bono' };
            console.log(recipe2);
          },
          1000,
          recipe.cook
        );
      },
      1000,
      recipeID[2]
    );
  }, 3000);
}

getRecipe();
