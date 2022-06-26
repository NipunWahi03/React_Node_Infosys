//Approach 2:Creating a middleware in another file and the referencing the middleware in all the routes seperately
const express = require("express");
const app = new express();
const logger = require("./Logger_middleware"); //Importing the Middleware from outer file

app.get("/", logger, (request, response) => {
  response.send("Welcome to The Home Page created in Middleware Example....");
});

app.get("/about", logger, (request, response) => {
  response.send(
    "Welcome to the About Page Created using the Middleware Example..."
  );
});

app.listen(5000, () => {
  console.log("Listening to the server at post 5000.....");
});
