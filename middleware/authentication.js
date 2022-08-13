const { JsonWebTokenError } = require("jsonwebtoken");
const { BadRequestError, UnauthorizedError } = require("../errors/index");
const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  console.log(req.cookies);
  const authHeader = req.headers.authorization;

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      username: payload.username,
      userId: payload.userId,
      role: payload.role,
    };
    next();
  } catch (err) {
    throw new UnauthorizedError("Invalid authentication");
  }
};

module.exports = authentication;
