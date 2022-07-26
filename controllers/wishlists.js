const Wishlist = require("../models/Wishlist");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");
const { deleteSingleWishlist, getAllWishlists, createWishlist } = require("../services/wishlists.service");

const getWishlists = async (req, res) => {
  // const { username, userId } = req.user;
  // const wishlists = await Wishlist.find({ createdBy: userId });
  // res.status(StatusCodes.OK).json({ success: true, wishlists, count: wishlists.length });
  await getAllWishlists(req, res);
};

const addWishlist = async (req, res) => {
  // const { userId } = req.user;
  // const wishlist = await Wishlist.create({ ...req.body, createdBy: userId, product: req.body.productId });
  // res.status(StatusCodes.OK).json({ success: true, wishlist });
  await createWishlist(req, res);
};

const removeWishlist = async (req, res) => {
  // const { id } = req.params;
  // const { userId } = req.user;

  // const wishlist = await Wishlist.findOneAndDelete({ productId: id, createdBy:userId });

  // if (!wishlist) {
  //   throw new NotFoundError("Cannot found wishlist");
  // }
  // res.status(StatusCodes.OK).json({ success: true, wishlist });
  await deleteSingleWishlist(req, res);
};

module.exports = {
  getWishlists,
  addWishlist,
  removeWishlist,
};
