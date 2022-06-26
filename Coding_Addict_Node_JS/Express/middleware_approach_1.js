const express = require("express");
const app = new express();

//Functionality of middleware
//request=>middleware=>response

//Approach 1: Creating a Middleware in the same file
const logger = (request, response, next) => {
  console.log(request.url);
  console.log(request.method);
  console.log("Welcome to the Logger Middleware");
  next();
};

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
