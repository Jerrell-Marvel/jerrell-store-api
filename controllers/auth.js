const User = require("../models/User");
const { register: registerUser, login: loginUser } = require("../services/auth.service");

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
