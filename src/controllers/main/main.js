const mainRoute = (request, response) => {
  response.set("Content-Type", "text/html");
  response.send("<h1>Hello! It's CookBook_Server</h1>");
};

module.exports = mainRoute;
