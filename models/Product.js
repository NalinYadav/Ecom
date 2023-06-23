const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },

  regularPrice: {
    type: Number,
    required: true,
  },
  salePrice: {
    type: Number,
  },
  currency: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  used: {
    type: Boolean,
    required: true,
  },
  public: {
    type: Boolean,
    required: true,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategory",
    },
  ],
  image: {
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
  gallery: [
    {
      link: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
      },
    },
  ],
  sku: {
    type: String,
  },
  vendor: {
    type: String,
    required: true,
  },
  customFields: {
    type: Map,
    of: String,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
