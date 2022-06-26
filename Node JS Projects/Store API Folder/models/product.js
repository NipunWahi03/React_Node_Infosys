const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Name, Name is Required"],
  },
  price: {
    type: Number,
    required: [true, "Please enter Price, Price is Required"],
  },
  company: {
    type: String,
    required: [true, "Please enter Company Name, Company Name is Required"],
    enum: ["marcos", "liddy", "ikea", "caressa"],
  },
  rating: {
    type: Number,
    default: 3,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
