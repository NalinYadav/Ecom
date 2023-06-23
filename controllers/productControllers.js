const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const data = req.body;
  try {
    const createdProduct = await Product.create(data);
    res.status(200).json(createdProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getProduct = async (req, res) => {
  try {
    const recievedProduct = await Product.findById(req.params.id).populate(
      "category"
    );

    if (!recievedProduct) return res.status(404).json("Product not found");

    res.status(200).json(recievedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const listProducts = async (req, res) => {
  const brand = req.query.brand;
  const category = req.query.category;
  let recievedProducts;
  try {
    if (brand) {
      recievedProducts = await Product.find({ brand });
    } else if (category) {
      recievedProducts = await Product.find({ category });
    } else {
      recievedProducts = await Product.find();
    }
    res.status(200).json(recievedProducts);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createProduct,
  getProduct,
  listProducts,
  updateProduct,
  deleteProduct,
};
