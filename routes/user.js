const { login, register, profile, logout } = require("../controllers/user");
const authentication = require("../middleware/authentication");
const express = require("express");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authentication, profile);
router.post("/logout", logout);

module.exports = router;
