const Product = require("../models/Product");
const { NotFoundError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");
const { getAllProducts, getSingleProduct } = require("../services/products.service");

const getProducts = async (req, res) => {
  // const { category } = req.query;
  // let results = Product.find({});
  // results.sort(category);
  // const products = await results;
  // res.status(StatusCodes.OK).json({ success: true, products, count: products });
  await getAllProducts(req, res, Product);
};

const getProduct = async (req, res) => {
  // const { id } = req.params;
  // const product = await Product.findOne({ _id: id });
  // if (!product) {
  //   throw new NotFoundError(`No product with id ${id}`);
  // }
  // res.status(StatusCodes.OK).json({ success: true, product });
  await getSingleProduct(req, res, Product);
};

module.exports = { getProducts, getProduct };
