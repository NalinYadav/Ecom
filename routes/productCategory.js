const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategory,
  listCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/productCategoryControllers");
const validateProductCategory = require("../middleware/validateProductCategory");

router.post("/create", validateProductCategory, createCategory);
router.get("/get/:id", getCategory);
router.get("/list", listCategories);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

module.exports = router;
