const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");

const getAllProducts = async (req, res) => {
  let results = Product.find({});

  const products = await results;

  return res.status(StatusCodes.OK).json({ success: true, products, count: products });
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
  const product = await Product.create({ ...req.body });
  console.log(product);
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
