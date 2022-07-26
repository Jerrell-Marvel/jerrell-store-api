const { create, createWishlist } = require("./create.service");
const { deleteItem, deleteSingleWishlist } = require("./delete.service");
const update = require("./update.service");
const login = require("./login.service");
const register = require("./register.service");
const { getAllProducts, getSingleProduct, getAllWishlists } = require("./get.service");

module.exports = { create, deleteItem, update, login, register, getAllProducts, getSingleProduct, getAllWishlists, createWishlist, deleteSingleWishlist };
