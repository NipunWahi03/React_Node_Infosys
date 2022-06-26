const products = require("./products.json");
const connection_database = require("./db/connect");
const Product_Model = require("./models/product");
require("dotenv").config();
const start = async () => {
  try {
    await connection_database(process.env.MONGO_URI);
    await Product_Model.deleteMany();
    await Product_Model.create(products);

    console.log(
      "Data has been poulated in the database using the products.js....."
    );
    process.exit(0);
  } catch (error) {}
};

start();
