const User = require("../models/User");
const { register: registerUser, login: loginUser, profile: getUserProfile } = require("../services/user.service");

const register = async (req, res) => {
  await registerUser(req, res, User);
};

const login = async (req, res) => {
  await loginUser(req, res, User);
};

const profile = async (req, res) => {
  await getUserProfile(req, res, User);
};

module.exports = {
  login,
  register,
  profile,
};
