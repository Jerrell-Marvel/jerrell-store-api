const { deleteSingleWishlist, getAllWishlists, createWishlist } = require("../services/wishlists.service");

const getWishlists = async (req, res) => {
  await getAllWishlists(req, res);
};

const addWishlist = async (req, res) => {
  await createWishlist(req, res);
};

const removeWishlist = async (req, res) => {
  await deleteSingleWishlist(req, res);
};

module.exports = {
  getWishlists,
  addWishlist,
  removeWishlist,
};
