const RECIPE = require("../../modules/db/schemas/recipe");

const { createdFailed, createdSuccess } = require("./configs/responses");

const updateRecipe = (request, response) => {
  const recipe = request.body;
  console.log(recipe.newRecipe);
  console.log(recipe.toPatches);
  const id = request.params.id;
  const { toPatches, newRecipe } = recipe;
  console.log(id);

  RECIPE.findByIdAndUpdate(
    id,
    {
      $set: { name: newRecipe.name, description: newRecipe.description },
      $push: {
        patches: {
          [toPatches.updatedAt]: {
            name: toPatches.name,
            description: toPatches.description,
            createdAt: toPatches.updatedAt
          }
        }
      }
    },
    { new: true },
    (err, createdItem) => {
      if (err) {
        console.log(err);
        createdFailed(response, err.message);
        // throw new Error(err);
      } else {
        createdSuccess(response, createdItem);
      }
    }
  );
};

module.exports = updateRecipe;
