const { isString, isNumber, isBool } = require("../helper/helper");

const validateProduct = (req, res, next) => {
  const data = req.body;

  if (!data.name || !isString(data.name)) {
    if (!data.name) return res.status(400).json("Name is required");

    return res.status(400).json("Name has to be a string");
  }

  if (!data.description || !isString(data.description)) {
    if (!data.description)
      return res.status(400).json("Description is required");

    return res.status(400).json("Description has to be a string");
  }

  if (data.slug && !isString(data.slug)) {
    return res.status(400).json("Slug has to be a string");
  }

  if (data.menu_order && !isNumber(data.menu_order)) {
    return res.status(400).json("Menu order has to be a number");
  }

  if (data.count && !isNumber(data.count)) {
    return res.status(400).json("count has to be a number");
  }

  if (data.display) {
    const enums = ["default", "products", "subcategories", "both"];
    if (!enums.includes(data.status)) {
      return res
        .status(400)
        .json(
          "Display must be one of the following: default,products,subcategories,both"
        );
    }
    if (!isString(data.display))
      return res.status(400).json("Display has to be a string");
  }

  if (data.image) {
    if (!data.image.link) {
      return res.status(400).json("link is required in image");
    } else if (!isString(data.image.link)) {
      return res.status(400).json("link has to be string in image");
    } else if (data.image.alt && !isString(data.image.alt)) {
      return res.status(400).json("alt has to be string in image");
    }
  } else {
    return res.status(400).json("image is required");
  }

  next();
};

module.exports = validateProduct;
