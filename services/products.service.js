const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");

const getAllProducts = async (req, res) => {
  const { category, sort, search } = req.query;

  let queryObject = {};

  if (category) {
    queryObject.category = category;
  }

  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let results = Product.find(queryObject);

  if (sort) {
    const sortMap = {
      newest: { createdAt: 1 },
      highest: { price: 1 },
      lowest: { price: -1 },
    };
    results.sort(sortMap[sort]);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  results.skip(skip).limit(limit);

  const products = await results;

  return res.status(StatusCodes.OK).json({ success: true, products, count: products.length });
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ _id: id });

  if (!product) {
    throw new NotFoundError(`No product with id ${id}`);
  }

  res.status(StatusCodes.OK).json({ success: true, product });
};

const createProduct = async (req, res) => {
  const product = await Product.create({ ...req.body, img: req.file.filename });
  return res.status(StatusCodes.OK).json({ success: true, product });
};

const deleteSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOneAndDelete({ _id: id });
  if (!product) {
    throw new NotFoundError(`No product with id ${id}`);
  }

  return res.status(StatusCodes.OK).json({ success: true, product });
};

const updateSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!product) {
    throw new NotFoundError(`No product with id ${id}`);
  }

  return res.status(StatusCodes.OK).json({ success: true, product });
};

module.exports = { getAllProducts, getSingleProduct, deleteSingleProduct, createProduct, updateSingleProduct };
