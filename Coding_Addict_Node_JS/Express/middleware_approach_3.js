//Approach 3: Suppose in Case when we need to have the middleware functionality, that we have created in say 1000 or more than 1000 routes, then it will be a very lazy task to go to each route and then place the middleware reference in that route, suppose there may be a functionality which will attach the middleware in all the routes automatically and you can simply run that, there comes the use of this 3rd approach and the most common approach, i.e to make use of the app.use().
const express = require("express");
const app = new express();
const logger = require("./Logger_middleware"); //Importing the Middleware from outer file
app.use(logger);

//In this approach, no need to reference the middleware in each route. Point to be noted here is that the placement of the app.use () in this approach plays a very significant role in this, like in this case if we place the app.use() after the first route, then when hitting the request to the first route, the middleware won't work.
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

app.listen(5000, () => {
  console.log("Listening to the server at post 5000.....");
});
