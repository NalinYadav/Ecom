const Collection = require("../models/Collection");
const { isValidId } = require("../helper/helper.js");
const createCollection = async (req, res) => {
  const data = req.body;
  try {
    const createdCollection = await Collection.create(data);
    res.status(200).json(createdCollection);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCollection = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json("Invalid id");
    }
    const recievedCollection = await Collection.findById(req.params.id);
    if (!recievedCollection)
      return res.status(404).json("Collection not found");

    res.status(200).json(recievedCollection);
  } catch (err) {
    res.status(500).json(err);
  }
};

const listCollections = async (req, res) => {
  const name = req.query.name;
  let recievedCollections;
  try {
    if (name) {
      recievedCollections = await Collection.find({ name });
    } else {
      recievedCollections = await Collection.find();
    }
    res.status(200).json(recievedCollections);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateCollection = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json("Invalid id");
    }
    const recievedCollection = await Collection.findById(req.params.id);
    if (!recievedCollection)
      return res.status(404).json("Collection not found");

    const updatedCollection = await Collection.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCollection);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCollection = async (req, res) => {
  try {
    if (!isValidId(req.params.id)) {
      return res.status(404).json("Invalid id");
    }
    const recievedCollection = await Collection.findById(req.params.id);
    if (!recievedCollection)
      return res.status(404).json("Collection not found");

    await Collection.findByIdAndDelete(req.params.id);
    res.status(200).json("Collection deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createCollection,
  getCollection,
  listCollections,
  updateCollection,
  deleteCollection,
};
