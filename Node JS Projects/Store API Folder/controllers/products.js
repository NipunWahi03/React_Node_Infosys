require("express-async-errors");
const productmodel = require("../models/product");
const getallProducts = async (req, res) => {
  const { name, company } = req.query;
  const query_object = {};
  if (name) {
    query_object.name = { $regex: name, $options: "i" };
  }
  if (company) {
    query_object.company = company;
  }
  console.log(query_object);
  const products = await productmodel.find(query_object);
  res.status(200).json({ products, total_products: products.length });
};

const getallProductsStatic = async (req, res) => {
  const allProducts = await productmodel.find({
    name: "wooden desk",
  });
  res.status(200).json({ allProducts, total_products: allProducts.length });
};

module.exports = {
  getallProducts,
  getallProductsStatic,
};
