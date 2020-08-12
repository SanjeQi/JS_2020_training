//---------------------------------------------Asynchronous JS with callbacks--callback hell :))))
// function getRecipe() {
//   setTimeout(() => {
//     const recipeID = [523, 883, 432, 974];
//     console.log(recipeID);
//     setTimeout(
//       (id) => {
//         const recipe = { title: 'Frash Tomato Pasta', cook: 'Bono' };
//         console.log(`${id}: ${recipe.title}`);
//         setTimeout(
//           (cook) => {
//             const recipe2 = { title: 'Italian Pizza', cook: 'Bono' };
//             console.log(recipe2);
//           },
//           1000,
//           recipe.cook
//         );
//       },
//       1000,
//       recipeID[2]
//     );
//   }, 3000);
// }

// getRecipe();

//---------------------------------------Asynchronous Js with Promises

// Create a promise
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([523, 883, 432, 974]);
  }, 5000);
});

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = {
          title: 'Frash Tomato Pasta',
          cook: 'Bono',
        };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRecipe2 = (cook) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (chef) => {
        const recipe2 = { title: 'Italian Pizza', cook: 'Bono' };
        resolve(`${chef}: ${recipe2.title}`);
      },
      1500,
      cook
    );
  });
};

// // Consume the promise
// getIDs
//   .then((IDs) => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then((recipe) => {
//     console.log(recipe);
//     return getRecipe2('Bono');
//   })
//   .then((recipe2) => {
//     console.log(recipe2);
//   })
//   .catch((error) => {
//     console.log('Something went wrong');
//   });

// -------------------------------------Consume promoses: Async/Await

async function getRecipeAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const recipe2 = await getRecipe2('Lae Porcu');
  console.log(recipe2);

  return recipe2;
}
getRecipeAW().then((res) => console.log(res));
