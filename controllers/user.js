const User = require("../models/User");
const { register: registerUser, login: loginUser, profile: getUserProfile, logout: logoutUser } = require("../services/user.service");

const register = async (req, res) => {
  await registerUser(req, res, User);
};

const login = async (req, res) => {
  await loginUser(req, res, User);
};

const profile = async (req, res) => {
  await getUserProfile(req, res, User);
};

const logout = async (req, res) => {
  await logoutUser(req, res);
};

module.exports = {
  login,
  register,
  profile,
  logout,
};
