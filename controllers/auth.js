const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthorizedError } = require("../errors/index");
const registerUser = require("../services/register.service");
const loginUser = require("../services/login.service");

const register = async (req, res) => {
  // const user = await User.create({ ...req.body });
  // res.status(StatusCodes.OK).json({ user });
  await registerUser(req, res, User);
};

const login = async (req, res) => {
  // const { email, password } = req.body;
  // if (!email || !password) {
  //   throw new BadRequestError("Please provide email and password");
  // }
  // const user = await User.findOne({ email });
  // if (!user) {
  //   throw new UnauthorizedError("Email is not registered");
  // }
  // const isPasswordCorrect = await user.matchPassword(password);
  // if (!isPasswordCorrect) {
  //   throw new UnauthorizedError("Password incorrect");
  // }
  // const token = await user.createJWT("user");
  // res.status(StatusCodes.OK).json({ username: user.username, token });
  await loginUser(req, res, User);
};

module.exports = {
  login,
  register,
};
