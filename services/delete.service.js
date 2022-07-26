const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");

const deleteItem = async (req, res, id, collection) => {
  const product = await collection.findOneAndDelete({ _id: id });
  if (!product) {
    throw new NotFoundError(`No product with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ success: true, product });
};

module.exports = deleteItem;
