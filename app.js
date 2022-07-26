const express = require("express");
const app = express();
// express async errors
require("express-async-errors");

// cors
const cors = require("cors");
app.use(cors());
// error handler middleware import
const errorHandler = require("./middleware/errorHandler");

// middleware import
const authentication = require("./middleware/authentication");
const adminAuthentication = require("./middleware/adminAuthentication");

// routes import
const authRoutes = require("./routes/user");
const wishlistRoutes = require("./routes/wishlist");
const productRoutes = require("./routes/product");
const productAdminRoutes = require("./routes/productAdmin");

// connect to DB import
const connectDB = require("./db/connectDB");
const notFound = require("./middleware/not-found");

// dotenv
require("dotenv").config();

// parse json
app.use(express.json());

// routes and routes auth
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/wishlist", authentication, wishlistRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/admin/products", authentication, adminAuthentication, productAdminRoutes);

// Error handling
app.use(errorHandler);
app.use(notFound);

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  try {
    connectDB(process.env.MONGO_URI);
    console.log(`Server is listening on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
