const Wishlist = require("../models/Wishlist");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const deleteWishlist = require("../services/delete.service");

const getAllWishlists = async (req, res) => {
  const { username, userId } = req.user;
  const wishlists = await Wishlist.find({ createdBy: userId });
  res.status(StatusCodes.OK).json({ success: true, wishlists, count: wishlists.length });
};

const addWishlist = async (req, res) => {
  const { userId } = req.user;
  const wishlist = await Wishlist.create({ ...req.body, createdBy: userId, product: req.body.productId });
  res.status(StatusCodes.OK).json({ success: true, wishlist });
};

const removeWishlist = async (req, res) => {
  const { id } = req.params;

  // const wishlist = await Wishlist.findOneAndDelete({ productId: id });

  // if (!wishlist) {
  //   throw new NotFoundError("Cannot found wishlist");
  // }
  // res.status(StatusCodes.OK).json({ success: true, wishlist });
  await deleteWishlist(req, res, id, Wishlist);
};

module.exports = {
  getAllWishlists,
  addWishlist,
  removeWishlist,
};
