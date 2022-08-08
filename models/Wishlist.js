const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please provide productId"],
      ref: "Product",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  {
    timestamps: true,
  }
);

WishlistSchema.pre("find", function (next) {
  this.populate("product");
  next();
});

const wishlistModel = mongoose.model("Wishlist", WishlistSchema);

module.exports = wishlistModel;
