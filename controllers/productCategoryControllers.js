const ProductCategory = require("../models/ProductCategory");
const { isValidId } = require("../helper/helper");

const createCategory = async (req, res) => {
  const data = req.body;
  try {
    const createdCategory = await ProductCategory.create(data);
    res.status(200).json(createdCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCategory = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json("Invalid id");
    }
    const recievedCategory = await ProductCategory.findById(req.params.id);
    if (!recievedCategory) return res.status(404).json("Category not found");

    res.status(200).json(recievedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

const listCategories = async (req, res) => {
  const name = req.query.name;
  let recievedCategories;
  try {
    if (name) {
      recievedCategories = await ProductCategory.find({ name });
    } else {
      recievedCategories = await ProductCategory.find();
    }
    res.status(200).json(recievedCategories);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCategory = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json("Invalid id");
    }
    const recievedCategory = await ProductCategory.findById(req.params.id);
    if (!recievedCategory) return res.status(404).json("Category not found");

    const updatedCategory = await ProductCategory.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCategory = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json("Invalid id");
    }
    const recievedCategory = await ProductCategory.findById(req.params.id);
    if (!recievedCategory) return res.status(404).json("Category not found");

    await ProductCategory.findByIdAndDelete(req.params.id);
    res.status(200).json("Category deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createCategory,
  getCategory,
  listCategories,
  updateCategory,
  deleteCategory,
};
