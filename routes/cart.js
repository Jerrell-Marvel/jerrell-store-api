const express = require("express");
const router = express.Router();
const { getCartItems, addCartItem, deleteCartItem, updateCartItem } = require("../controllers/cart");

router.route("/").get(getCartItems).post(addCartItem);
router.route("/:id").delete(deleteCartItem).patch(updateCartItem);

module.exports = router;
