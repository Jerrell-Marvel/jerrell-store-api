const apiCall = (req, res, next) => {
  console.log("api called");
  next();
};

module.exports = apiCall;
