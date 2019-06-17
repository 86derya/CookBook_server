const RECIPE = require("../../modules/db/schemas/recipe");

const { createdFailed, createdSuccess } = require("./configs/responses");

const createRecipe = (request, response) => {
  const recipe = request.body;
  console.log(recipe);

  RECIPE.create(recipe, (err, createdItem) => {
    if (err) {
      console.log(err);
      createdFailed(response, err.message);
      throw new Error(err);
    } else {
      createdSuccess(response, createdItem);
    }
  });
};

module.exports = createRecipe;
