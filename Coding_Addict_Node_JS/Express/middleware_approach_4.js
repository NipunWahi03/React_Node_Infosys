//Approach 4: Suppose in Case when we need to have the middleware functionality, that we have created in say 1000 or more than 1000 routes, then it will be a very lazy task to go to each route and then place the middleware reference in that route, suppose there may be a functionality which will attach the middleware in all the routes automatically and you can simply run that, there comes the use of this 3rd approach and the most common approach, i.e to make use of the app.use().
const express = require("express");
const app = new express();
const logger = require("./Logger_middleware"); //Importing the Middleware from outer file

//Specifying that for which routes it will run the middleware, in this case all the routes starting with the route /api...
app.use("/api", logger);

//In this approach, no need to reference the middleware in some routes starting with /api. So in this case, we can pass another argument in the app.use() to specify that for which routes, it is required to run the middleware and for which routes it can simply ignore the middleware.
app.get("/", (request, response) => {
  response.send("Welcome to The Home Page created in Middleware Example....");
});

app.get("/about", (request, response) => {
  response.send(
    "Welcome to the About Page Created using the Middleware Example..."
  );
});

app.get("/api/products", (request, response) => {
  response.send(
    "Welcome to the API Products Page Created using the Middleware Example..."
  );
});

app.get("/api/v1/details", (request, response) => {
  response.send(
    "Welcome to the API Details Page Created using the Middleware Example..."
  );
});

app.get("/api/v1/product/name", (request, response) => {
  response.send(
    "Welcome to the API Product Name Page Created using the Middleware Example..."
  );
});

app.listen(5000, () => {
  console.log("Listening to the server at post 5000.....");
});
