const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = require("./modules/app");
const morgan = require("morgan");
const router = require("./router");
const path = require("path");
const config = require("../config");
const cors = require("cors");
const errorHandler = (request, response, next) => {
  response.status(500).send("No such page");
  next();
};

const hostedAt = "https://foodydederiaserver.herokuapp.com";
const PORT = process.env.PORT || config.port;

const startServer = port => {
  app
    // .options("*", cors())
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use("/", router)
    .disable("etag") //disables 304
    .use(errorHandler);

  http.createServer(app).listen(PORT);

  console.log("Server is running at http://localhost:" + PORT);
};

module.exports = startServer;
