//Importing dotenv file
require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = new express();
const router = require("./routes/main");
//Importing Middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

//To use all the static files which won't be changed while doing work on the server
app.use(express.static("./public"));

//Using Middlewares
app.use("/api/v1/", router);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Using dotenv PORT variable
const port = process.env.PORT || 9000;

//Function to start
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
//Call to start
start();

// require('dotenv').config();
// require('express-async-errors');

// const express = require('express');
// const app = express();

// const notFoundMiddleware = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

// // middleware
// app.use(express.static('./public'));
// app.use(express.json());

// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

// const port = process.env.PORT || 3000;

// const start = async () => {
//   try {
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
