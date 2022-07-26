const express = require("express");
const router = express.Router();
const { addProduct, updateProduct, deleteProduct } = require("../controllers/productsAdmin");

router.route("/").post(addProduct);
router.route("/:id").patch(updateProduct).delete(deleteProduct);

module.exports = router;
