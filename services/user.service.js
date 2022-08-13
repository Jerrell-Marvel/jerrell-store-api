const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthorizedError } = require("../errors/index");
const cartModel = require("../models/Cart");

const register = async (req, res, collection) => {
  const user = await collection.create({ ...req.body });

  return res.status(StatusCodes.OK).json({ user });
};

const login = async (req, res, collection) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }
  const user = await collection.findOne({ email });

  if (!user) {
    throw new UnauthorizedError("email is not registered");
  }

  const isPasswordCorrect = await user.matchPassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError("incorrect password");
  }

  const token = await user.createJWT();
  // .cookie("test", "this is the test cookie", { maxAge: 900000, httpOnly: true, domain: "http://localhost:3000" })
  const cartCount = await cartModel.countDocuments({ createdBy: user._id });

  return res.status(StatusCodes.OK).cookie("token", token, { sameSite: "none", secure: true, httpOnly: true }).json({ username: user.username, cartCount: cartCount }).send();

  // return res.status(StatusCodes.OK).cookie("test", "this is the test cookie", { maxAge: 900000, domain: "http://localhost:3000" }).json({ username: user.username, token });
};

const profile = async (req, res, collection) => {
  const { username, userId } = req.user;

  const cartCount = await cartModel.countDocuments({ createdBy: userId });
  console.log(username, userId, cartCount);

  return res.status(StatusCodes.OK).json({ username, cartCount });
};

module.exports = { login, register, profile };
