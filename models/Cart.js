const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productId: {
    type: String,
    unique: true,
    required: [true, "Please provide productId"],
  },
  productName: {
    type: String,
    required: [true, "Please provide productName"],
    unique: true,
  },
  quantity: {
    type: String,
    required: [true, "Please provide productName"],
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});
