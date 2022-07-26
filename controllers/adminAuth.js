const Admin = require("../models/Admin");
const { register: registerAdmin, login: loginAdmin } = require("../services/auth.service");

const register = async (req, res) => {
  await registerAdmin(req, res, Admin);
};

const login = async (req, res) => {
  await loginAdmin(req, res, Admin);
};

module.exports = {
  login,
  register,
};
