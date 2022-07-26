const { deleteSingleProduct, createProduct, updateSingleProduct } = require("../services/products.service");

const addProduct = async (req, res) => {
  await createProduct(req, res);
};

const deleteProduct = async (req, res) => {
  await deleteSingleProduct(req, res);
};

const updateProduct = async (req, res) => {
  await updateSingleProduct(req, res);
};

module.exports = { addProduct, deleteProduct, updateProduct };
