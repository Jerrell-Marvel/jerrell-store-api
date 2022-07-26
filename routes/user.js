const { login, register } = require("../controllers/auth");
const express = require("express");

const router = express.Router();

router.post("/register", register);
router.get("/login", login);

module.exports = router;
