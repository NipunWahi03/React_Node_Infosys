const express = require("express");
const app = new express();
require("dotenv").config();
const connection_database = require("./db/connect");

const notfound = require("./middleware/not-found");
const errorhandler = require("./middleware/error-handler");

const ProductsRoute = require("./routes/products");

app.use("/api/v1/products", ProductsRoute);

app.use(notfound);
app.use(errorhandler);

const start = async () => {
  try {
    await connection_database(process.env.MONGO_URI);
    app.listen(5000, () => {
      console.log("Listening to port 5000.....");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
