const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide product name"],
    },
    weight: {
      type: String,
      required: [true, "Please provide weight"],
    },
    category: {
      type: String,
      required: [true, "Please provide category"],
    },
    stock: {
      type: String,
      required: [true, "Please provide stock"],
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
    },
    price: {
      type: String,
      required: [true, "Please provide price"],
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", ProductSchema);
module.exports = productModel;
