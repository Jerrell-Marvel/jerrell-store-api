const express = require("express");
const router = express.Router();
const { addProduct, updateProduct, deleteProduct } = require("../controllers/productsAdmin");
const uploadFileMiddleware = require("../middleware/fileUploadMiddleware");

router.route("/").post(uploadFileMiddleware("image"), addProduct);
router.route("/:id").patch(updateProduct).delete(deleteProduct);

module.exports = router;
