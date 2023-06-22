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

  if (!data.source || isString(data.source)) {
    const enums = ["whatsapp", "woocommerce", "shopify", "manual"];
    if (!enums.includes(data.source)) {
      return res
        .status(400)
        .json(
          "Source must be one of the following: whatsapp, woocommerce, shopify, manual "
        );
    }
    return res.status(400).json("Business has to be a string");
  }
};

module.exports = validateOrder;
