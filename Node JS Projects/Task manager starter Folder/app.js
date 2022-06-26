//import the express module
const express = require("express");

//Creating and instance of the express module
const app = new express();

//import the connect.js file
const connection_database = require("./Database/connect");

//importing the dotenv module
require("dotenv").config();

//importing the task_manager_routes file
const routes = require("./Routes/taskRoutes");

//importing the Not_Found Middleware
const not_found = require("./Middlewares/Not_found");

//importing CustomErrorHandling Middleware
const CustomErrorHandling = require("./Middlewares/CustomErrorHandling");

//Using the built-in middleware to receive the data in the .json format
app.use(express.json());

//Using the built-in middleware to receive the data in the form format
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
//Using the middleware routes on the specific routes starting with /api/v1/Tasks

app.use("/api/v1/Tasks", routes);
app.use(not_found);
app.use(CustomErrorHandling);

// Writing the aync function to connect to the database, and if the connection successful, then will connect to the server, otherwise will throw the error
const start = async () => {
  try {
    await connection_database(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log("Server is listening on port 5000.....");
    });
  } catch (error) {
    console.log(error);
  }
};
start();

// app.listen(5000, () => {
//   console.log("Server is listening on port 5000...........");
// });

console.log("Hello We are in the Task manager Api project.....");
console.log("Hello We are in the Task manager Api project.....");
console.log("Hello We are in the Task manager Api project.....");
console.log("Hello We are in the Task manager Api project.....");
console.log("Hello We are in the Task manager Api project.....");
console.log("Hello We are in the Task manager Api project.....");
console.log("Hello We are in the Task manager Api project.....");

//Invoking the start function
