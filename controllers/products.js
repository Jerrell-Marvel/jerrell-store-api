const Product = require("../models/Product");
const { NotFoundError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");
const { getAllProducts, getSingleProduct } = require("../services/products.service");

const getProducts = async (req, res) => {
  await getAllProducts(req, res, Product);
};

const getProduct = async (req, res) => {
  await getSingleProduct(req, res, Product);
};

module.exports = { getProducts, getProduct };
