const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      unique: true,
      required: [true, "Please provide productId"],
      ref: "Product",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    quantity: {
      type: String,
      required: [true, "Please provide quantity"],
    },
  },
  {
    timestamps: true,
  }
);

CartSchema.pre("find", function (next) {
  this.populate("product");
  next();
});

const cartModel = mongoose.model("Cart", CartSchema);

module.exports = cartModel;
