const express = require("express");
const app = express();

// express async errors
require("express-async-errors");

const apiCall = require("./middleware/apiCall");

// cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// cors
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "127.0.0.1:5500", "192.168.0.182:3000"],
  })
);

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
const adminRoutes = require("./routes/admin");
const cartRoutes = require("./routes/cart");

// connect to DB import
const connectDB = require("./db/connectDB");
const notFound = require("./middleware/not-found");

// Static assets
app.use(express.static("public"));

// dotenv
require("dotenv").config();

// parse json
app.use(express.json());

// routes and routes auth
app.use("/api/v1/auth", apiCall, authRoutes);
app.use("/api/v1/wishlist", apiCall, authentication, wishlistRoutes);
app.use("/api/v1/cart", apiCall, authentication, cartRoutes);
app.use("/api/v1/products", apiCall, productRoutes);
// app.use("/api/v1/admin/products", apiCall, authentication, adminAuthentication, productAdminRoutes);
app.use("/api/v1/admin/products", apiCall, productAdminRoutes);
app.use("/api/v1/admin/auth", apiCall, adminRoutes);

// Error handling
app.use(errorHandler);
app.use(notFound);

// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  try {
    connectDB(process.env.MONGO_URI);
    console.log(`Server is listening on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
