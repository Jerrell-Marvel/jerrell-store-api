const Cart = require("../models/Cart");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");

const getAllCartItems = async (req, res) => {
  const { username, userId } = req.user;
  const items = await Cart.find({ createdBy: userId }).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({ success: true, items, count: items.length });
};

const addToCart = async (req, res) => {
  const { userId } = req.user;
  const items = await Cart.create({ ...req.body, createdBy: userId, product: req.body.productId });
  return res.status(StatusCodes.OK).json({ success: true, items });
};

const deleteFromCart = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  const item = await Cart.findOneAndDelete({ _id: id, createdBy: userId });
  if (!item) {
    throw new NotFoundError("Cannot found items");
  }
  return res.status(StatusCodes.OK).json({ success: true, item });
};

const updateSingleCartItem = async (req, res) => {
  const { id } = req.params;
  const item = await Cart.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!item) {
    throw new NotFoundError(`No product with id ${id}`);
  }

  return res.status(StatusCodes.OK).json({ success: true, item });
};

module.exports = { getAllCartItems, addToCart, deleteFromCart, updateSingleCartItem };
