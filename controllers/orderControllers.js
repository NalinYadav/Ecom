const mongoose = require("mongoose");
const Order = require("../models/Order");
const createOrder = async (req, res) => {
  const data = req.body;
  //
  try {
    const createdOrder = await Order.create(data);
    res.status(200).json(createdOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOrder = async (req, res) => {
  try {
    const recievedOrder = await Order.findById(req.params.id);
    if (!recievedOrder) return res.status(404).json("Order not found");

    res.status(200).json(recievedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const listOrders = async (req, res) => {
  const orderNum = req.query.orderNumber;
  let recievedOrders;
  try {
    if (orderNum) {
      recievedOrders = await Order.find({ orderNumber: orderNum });
    } else {
      recievedOrders = await Order.find();
    }
    res.status(200).json(recievedOrders);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createOrder,
  getOrder,
  listOrders,
  updateOrder,
  deleteOrder,
};
