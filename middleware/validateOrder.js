const { isString, isNumber } = require("../helper/helper");

const validateOrder = (req, res, next) => {
  const data = req.body;

  if (!data.orderNumber || !isString(data.orderNumber)) {
    if (!data.orderNumber)
      return res.status(400).json("Order number is required");

    return res.status(400).json("Order number has to be a string");
  }

  if (!data.business || !isString(data.business)) {
    if (!data.business) return res.status(400).json("Business is required");

    return res.status(400).json("Business has to be a string");
  }

  if (data.source) {
    const enums = ["whatsapp", "woocommerce", "shopify", "manual"];
    if (!enums.includes(data.source)) {
      return res
        .status(400)
        .json(
          "Source must be one of the following: whatsapp, woocommerce, shopify, manual "
        );
    }
    if (!isString(data.source))
      return res.status(400).json("Source has to be a string");
  }

  if (!data.totalAmount || !isNumber(data.totalAmount)) {
    if (!data.totalAmount)
      return res.status(400).json("Total Amount is required");

    return res.status(400).json("Total Amount has to be a number");
  }

  if (!data.paymentMethod || !isString(data.paymentMethod)) {
    if (!data.paymentMethod)
      return res.status(400).json("Payment Method is required");

    return res.status(400).json("Payment Method has to be a string");
  }

  if (data.status) {
    const enums = ["pending", "processing", "completed", "cancelled"];
    if (!enums.includes(data.status)) {
      return res
        .status(400)
        .json(
          "Status must be one of the following: pending, processing, completed, cancelled"
        );
    }
    if (!isString(data.status))
      return res.status(400).json("Status has to be a string");
  }

  if (data.items) {
    if (typeof data.items !== "object")
      return res.status(400).json("Items has to be an array");
    var temp = 0;
    data.items.map((item) => {
      if (!item.quantity || !isNumber(item.quantity)) {
        temp++;
        if (!item.quantity)
          return res.status(400).json("Quantity is required in items array");

        return res
          .status(400)
          .json("Quantity has to be a number in items array");
      }
      if (!item.price || !isNumber(item.price)) {
        temp++;
        if (!item.price)
          return res.status(400).json("Price is required in items array");

        return res.status(400).json("Price has to be a number in items array");
      }
    });

    if (temp != 0) return;
  }

  next();
};

module.exports = validateOrder;
