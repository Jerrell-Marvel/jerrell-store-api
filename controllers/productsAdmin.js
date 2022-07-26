const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors/index");
const { deleteItem: deleteSingleProduct, create: createProduct, update: updateSingleProduct } = require("../services/index.js");

const addProduct = async (req, res) => {
  // const product = await Product.create({ ...req.body });
  // res.status(StatusCodes.OK).json({ success: true, product });

  await createProduct(req, res, Product);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  // const product = await Product.findOneAndDelete({ _id: id });
  // if (!product) {
  //   throw new NotFoundError(`No product with id ${id}`);
  // }

  // res.status(StatusCodes.OK).json({ success: true, product });

  await deleteSingleProduct(req, res, id, Product);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  // const product = await Product.findOneAndUpdate(
  //   { _id: id },
  //   { ...req.body },
  //   {
  //     new: true,
  //     runValidators: true,
  //   }
  // );

  // if (!product) {
  //   throw new NotFoundError(`No product with id ${id}`);
  // }

  // res.status(StatusCodes.OK).json({ success: true, product });

  await updateSingleProduct(req, res, id, Product);
};

module.exports = { addProduct, deleteProduct, updateProduct };
