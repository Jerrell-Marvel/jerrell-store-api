const notFound = (req, res) => {
  res.status(404).json({ message: "Route doesn't exist" });
};

module.exports = notFound;
