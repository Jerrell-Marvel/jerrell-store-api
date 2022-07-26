const { StatusCodes } = require("http-status-codes");
const update = async (req, res, id, collection) => {
  const product = await collection.findOneAndUpdate(
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

  res.status(StatusCodes.OK).json({ success: true, product });
};
module.exports = update;
