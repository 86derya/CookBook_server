const express = require("express");
const mainRoute = require("./controllers/main/main");

const {
  updateRecipe,
  createRecipe,
  getRecipes,
  getRecipeById
} = require("./controllers/recipes");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .post("/recipes", createRecipe)
  .get("/recipes", getRecipes)
  .get("/recipes/:id", getRecipeById)
  .put("/recipes/:id", updateRecipe);

module.exports = apiRoutes;
