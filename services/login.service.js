const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthorizedError } = require("../errors/index");

const login = async (req, res, collection) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await collection.findOne({ email });

  if (!user) {
    throw new UnauthorizedError("Email is not registered");
  }

  const isPasswordCorrect = await user.matchPassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError("Password incorrect");
  }

  const token = await user.createJWT("user");

  res.status(StatusCodes.OK).json({ username: user.username, token });
};

module.exports = login;
