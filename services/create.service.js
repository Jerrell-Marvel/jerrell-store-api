const { StatusCodes } = require("http-status-codes");
const create = async (req, res, collection) => {
  const product = await collection.create({ ...req.body });
  console.log(product);
  return res.status(StatusCodes.OK).json({ success: true, product });
};

const createWishlist = async (req, res, collection) => {
  const { userId } = req.user;
  const wishlist = await collection.create({ ...req.body, createdBy: userId, product: req.body.productId });
  return res.status(StatusCodes.OK).json({ success: true, wishlist });
};

module.exports = { create, createWishlist };
