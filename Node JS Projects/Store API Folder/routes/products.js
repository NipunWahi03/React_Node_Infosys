const express = require("express");
const router = express.Router();

const {
  getallProducts,
  getallProductsStatic,
} = require("../controllers/products");

router.get("/", getallProducts);
router.get("/static", getallProductsStatic);

module.exports = router;
