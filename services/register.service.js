const { StatusCodes } = require("http-status-codes");

const register = async (req, res, collection) => {
  const user = await collection.create({ ...req.body });
  console.log(user);

  return res.status(StatusCodes.OK).json({ user });
};

module.exports = register;
