const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    match: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
});

AdminSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

AdminSchema.methods.matchPassword = async function (userPassword) {
  const isPasswordMatch = await bcrypt.compare(userPassword, this.password);
  return isPasswordMatch;
};

AdminSchema.methods.createJWT = function () {
  return jwt.sign({ username: this.username, userId: this._id, role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

const userModel = mongoose.model("Admin", AdminSchema);
module.exports = userModel;
