const express = require("express");
const cors = require("cors");
const mainRoute = require("./controllers/main/main");
const { login, logout, signUp, getUserByToken } = require("./controllers/auth");
const verifyToken = require("./modules/verifyToken");

const {
  createMenuItem,
  getMenuItems,
  getMenuItemById,
  createComment
} = require("./controllers/menuItems");

const {
  createUser,
  getUserById,
  updateUser,
  getUsers
} = require("./controllers/users/");
const {
  createProduct,
  updateProduct,
  getProducts,
  getProductById
} = require("./controllers/products/");
const {
  createIngredient,
  getAllIngredients
} = require("./controllers/ingredients/");

const { createOrder, getOrderById } = require("./controllers/orders");
const { getComments } = require("./controllers/comments");
const { getAllCategories } = require("./controllers/categories");

const apiRoutes = express.Router();

apiRoutes
  .post("/auth/login", login)
  .post("/auth/register", signUp)
  .post("/menu", createMenuItem)
  .get("/menu", getMenuItems)
  .get("/menu/:id", getMenuItemById);

module.exports = apiRoutes;
