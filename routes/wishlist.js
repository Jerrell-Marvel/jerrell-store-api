const express = require("express");
const { getAllWishlists, addWishlist, removeWishlist } = require("../controllers/wishlists");

const router = express.Router();

router.route("/").get(getAllWishlists).post(addWishlist);
router.route("/:id").delete(removeWishlist);

module.exports = router;
