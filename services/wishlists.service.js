const Wishlist = require("../models/Wishlist");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");

const getAllWishlists = async (req, res) => {
  const { username, userId } = req.user;
  const wishlists = await Wishlist.find({ createdBy: userId }).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({ success: true, wishlists, count: wishlists.length });
};

const createWishlist = async (req, res) => {
  const { userId } = req.user;
  const wishlist = await Wishlist.create({ ...req.body, createdBy: userId, product: req.body.productId });
  return res.status(StatusCodes.OK).json({ success: true, wishlist });
};

const deleteSingleWishlist = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  const wishlist = await Wishlist.findOneAndDelete({ _id: id, createdBy: userId });
  if (!wishlist) {
    throw new NotFoundError("Cannot found wishlist");
  }
  return res.status(StatusCodes.OK).json({ success: true, wishlist });
};

module.exports = { getAllWishlists, createWishlist, deleteSingleWishlist };
