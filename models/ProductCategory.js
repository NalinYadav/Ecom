const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  menu_order: {
    type: Number,
  },
  count: {
    type: Number,
  },
  slug: {
    type: String,
  },
  display: {
    type: String,
    enum: ["default", "products", "subcategories", "both"],
    default: "default",
  },
  image: {
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
});

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

module.exports = ProductCategory;
