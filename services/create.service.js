const { StatusCodes } = require("http-status-codes");
const create = async (req, res, collection) => {
  const product = await collection.create({ ...req.body });
  res.status(StatusCodes.OK).json({ success: true, product });
};

module.exports = create;
