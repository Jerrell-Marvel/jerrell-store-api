const { StatusCodes } = require("http-status-codes");
const errorHandler = (err, req, res, next) => {
  let customError = {
    success: false,
    name: err.name || "Internal server error",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong try again later",
  };

  if (err.code === 11000) {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.message = "Duplicate value error";
    customError.field = Object.keys(err.keyValue);
  }

  if (err.name === "ValidationError") {
    customError.statusCode = StatusCodes.BAD_REQUEST;
    customError.field = Object.keys(err.errors);

    customError.message = {};
    Object.keys(err.errors).forEach((key) => {
      customError.message[key] = err.errors[key].message;
    });
  }

  if (err.name === "CastError") {
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  // return res.json(err);
  return res.status(customError.statusCode).json(customError);
};

module.exports = errorHandler;
