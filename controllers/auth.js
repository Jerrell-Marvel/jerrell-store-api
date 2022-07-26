const User = require("../models/User");
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
