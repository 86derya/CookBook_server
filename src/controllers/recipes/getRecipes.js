const RECIPE = require("../../modules/db/schemas/recipe");

const {
  allRecipesfromDbFailed,
  allRecipesfromDbSuccess
} = require("./configs/responses");

const getRecipes = (request, response) => {
  RECIPE.find({}, function(err, recipes) {
    if (err) {
      allRecipesfromDbFailed(response, err.message);
    } else {
      allRecipesfromDbSuccess(response, recipes);
    }
  });
};

module.exports = getRecipes;
