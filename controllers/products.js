
const { getAllProducts, getSingleProduct } = require("../services/products.service");

const getProducts = async (req, res) => {
  await getAllProducts(req, res);
};

const getProduct = async (req, res) => {
  await getSingleProduct(req, res);
};

module.exports = { getProducts, getProduct };
