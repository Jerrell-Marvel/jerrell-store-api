const { JsonWebTokenError } = require("jsonwebtoken");
const { BadRequestError, UnauthorizedError } = require("../errors/index");
const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthorizedError("Invalid authentication");
  }

  const token = authHeader.split(" ")[1];

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
