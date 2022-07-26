const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors/index");

const deleteItem = async (req, res, id, collection) => {
  const product = await collection.findOneAndDelete({ _id: id });
  if (!product) {
    throw new NotFoundError(`No product with id ${id}`);
  }

  return res.status(StatusCodes.OK).json({ success: true, product });
};

const deleteSingleWishlist = async (req, res, collection) => {
  const { id } = req.params;
  const { userId } = req.user;
  const wishlist = await collection.findOneAndDelete({ productId: id, createdBy: userId });
  if (!wishlist) {
    throw new NotFoundError("Cannot found wishlist");
  }
  return res.status(StatusCodes.OK).json({ success: true, wishlist });
};

module.exports = { deleteItem, deleteSingleWishlist };
