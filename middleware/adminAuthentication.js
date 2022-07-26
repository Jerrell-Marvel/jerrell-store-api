const { UnauthorizedError } = require("../errors/index");
const adminAuthentication = (req, res, next) => {
  const { role } = req.user;

  if (role !== "admin") {
    throw new UnauthorizedError("Invalid admin authentication");
  }

  next();
};

module.exports = adminAuthentication;
