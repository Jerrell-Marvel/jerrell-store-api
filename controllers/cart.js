const { addToCart, deleteFromCart, getAllCartItems, updateSingleCartItem } = require("../services/cart.service");

const getCartItems = async (req, res) => {
  await getAllCartItems(req, res);
};

const addCartItem = async (req, res) => {
  await addToCart(req, res);
};

const deleteCartItem = async (req, res) => {
  await deleteFromCart(req, res);
};

const updateCartItem = async (req, res) => {
  await updateSingleCartItem(req, res);
};

module.exports = {
  getCartItems,
  addCartItem,
  deleteCartItem,
  updateCartItem,
};
