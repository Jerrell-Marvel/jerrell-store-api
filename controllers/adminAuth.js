require("dotenv").config();

const jwt = require("jsonwebtoken");
const token = jwt.sign({ username: "admin", email: "admin@gmail.com", role: "admin" }, "+MbPeShVmYq3t6w9z$C&F)J@NcRfTjMn", {
  expiresIn: "30d",
});

console.log(token);
