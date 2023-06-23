const express = require("express");
const {
  createCollection,
  getCollection,
  listCollections,
  updateCollection,
  deleteCollection,
} = require("../controllers/collectionControllers");
const validateCollection = require("../middleware/validateCollection");
const router = express.Router();

router.post("/create", validateCollection, createCollection);
router.get("/get/:id", getCollection);
router.get("/list", listCollections);
router.put("/update/:id", updateCollection);
router.delete("/delete/:id", deleteCollection);

module.exports = router;
