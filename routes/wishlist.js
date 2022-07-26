const express = require("express");
const { getWishlists, addWishlist, removeWishlist } = require("../controllers/wishlists");

const router = express.Router();

router.route("/").get(getWishlists).post(addWishlist);
router.route("/:id").delete(removeWishlist);

module.exports = router;
