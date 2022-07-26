const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");
const getAllProducts = async (req, res, collection, queryObject) => {
  let results = collection.find({});

  const products = await results;

  return res.status(StatusCodes.OK).json({ success: true, products, count: products });
};

const getSingleProduct = async (req, res, collection) => {
  const { id } = req.params;

  const product = await collection.findOne({ _id: id });

  if (!product) {
    throw new NotFoundError(`No product with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ success: true, product });
};

const getAllWishlists = async (req, res, collection) => {
  const { username, userId } = req.user;
  const wishlists = await collection.find({ createdBy: userId });
  res.status(StatusCodes.OK).json({ success: true, wishlists, count: wishlists.length });
};

module.exports = { getAllProducts, getSingleProduct, getAllWishlists };
