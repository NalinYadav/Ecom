const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProduct,
  listProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");
const validateProduct = require("../middleware/validateProduct");

router.post("/create", validateProduct, createProduct);
router.get("/get/:id", getProduct);
router.get("/list", listProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
