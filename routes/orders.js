const express = require("express");
const {
  createOrder,
  getOrder,
  listOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderControllers");
const validateOrder = require("../middleware/validateOrder");
const router = express.Router();

router.post("/create", validateOrder, createOrder);
router.get("/get/:id", getOrder);
router.get("/list", listOrders);
router.put("/update/:id", updateOrder);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
