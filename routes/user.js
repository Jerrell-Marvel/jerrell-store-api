const { login, register, profile } = require("../controllers/user");
const authentication = require("../middleware/authentication");
const express = require("express");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authentication, profile);

module.exports = router;
