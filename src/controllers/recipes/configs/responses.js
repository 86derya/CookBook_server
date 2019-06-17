module.exports = {
  allRecipesfromDbSuccess: function(response, recipes) {
    response.status(200);
    response.json({ recipes: recipes });
  },
  allRecipesfromDbFailed: function(response, reason) {
    response.status(400);
    response.json({ status: "failed", recipes: reason });
  },
  searchByIdSuccess: function(response, recipe) {
    response.status(200);
    response.json({ recipe: recipe });
  },
  searchByIdFailed: function(response, reason) {
    response.status(400);
    response.json({ status: "failed", reason: reason });
  },
  createdSuccess: function(response, recipe) {
    response.status(201);
    response.json({ status: "success", createdRecipe: recipe });
  },
  createdFailed: function(response, err) {
    response.status(404);
    response.json({ status: "failed", message: err });
  }
};
