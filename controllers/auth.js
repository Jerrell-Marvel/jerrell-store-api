const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthorizedError } = require("../errors/index");
const registerUser = require("../services/register.service");
const loginUser = require("../services/login.service");

const register = async (req, res) => {
  await registerUser(req, res, User);
};

const login = async (req, res) => {
  await loginUser(req, res, User);
};

module.exports = {
  login,
  register,
};
