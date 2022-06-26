const express = require("express");
const app = new express();

//importing the routes
const family_routes = require("./Routers/Routes");

//Parsing the form data
app.use(express.urlencoded({ extended: false }));

//Parsing the JSON
app.use(express.json());

//Using the Middleware Routes starting with the basepath mentioned
app.use("/api/getFamilyMembers", family_routes);

app.listen(5000, (request, response) => {
  console.log("Listening to the server at port 5000....");
});
