const RECIPE = require("../../modules/db/schemas/recipe");
const { searchByIdSuccess, searchByIdFailed } = require("./configs/responses");

const getRecipeById = (request, response) => {
  const id = request.params.id;

  RECIPE.findById(id, function(err, recipe) {
    if (err) {
      searchByIdFailed(response, err.message);
    } else {
      searchByIdSuccess(response, recipe);
    }
  });
};

module.exports = getRecipeById;
