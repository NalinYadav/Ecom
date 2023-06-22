const { isString, isNumber, isBool } = require("../helper/helper");

const validateProduct = (req, res, next) => {
  const data = req.body;

  if (!data.name || !isString(data.name)) {
    if (!data.name) return res.status(400).json("Name is required");

    return res.status(400).json("Name has to be a string");
  }

  if (!data.shortDescription || !isString(data.shortDescription)) {
    if (!data.shortDescription)
      return res.status(400).json("Short Description is required");

    return res.status(400).json("Short Description has to be a string");
  }

  if (!data.description || !isString(data.description)) {
    if (!data.description)
      return res.status(400).json("Description is required");

    return res.status(400).json("Description has to be a string");
  }

  if (!data.brand || !isString(data.brand)) {
    if (!data.brand) return res.status(400).json("Brand is required");

    return res.status(400).json("Brand has to be a string");
  }

  if (!data.category || !isString(data.category)) {
    if (!data.category) return res.status(400).json("category is required");

    return res.status(400).json("category has to be a string");
  }

  if (!data.regularPrice || !isNumber(data.regularPrice)) {
    if (!data.regularPrice)
      return res.status(400).json("Regular Price is required");

    return res.status(400).json("Regular Price has to be a number");
  }

  if (!data.salePrice || !isNumber(data.salePrice)) {
    if (!data.salePrice) return res.status(400).json("Sale Price is required");

    return res.status(400).json("Sale Price has to be a number");
  }

  if (!data.currency || !isString(data.currency)) {
    if (!data.currency) return res.status(400).json("Currency is required");

    return res.status(400).json("Currency has to be a string");
  }

  if (!data.inStock || !isBool(data.inStock)) {
    if (!data.inStock) return res.status(400).json("inStock is required");

    return res.status(400).json("inStock has to be a Boolean");
  }

  if (!data.used || !isBool(data.used)) {
    if (!data.used) return res.status(400).json("used is required");

    return res.status(400).json("used has to be a Boolean");
  }
  if (!data.public || !isBool(data.public)) {
    if (!data.public) return res.status(400).json("public is required");

    return res.status(400).json("public has to be a Boolean");
  }

  if (data.sku) {
    if (!isString(data.sku))
      return res.status(400).json("sku has to be a string");
  }

  if (data.gallery) {
    if (typeof data.gallery !== "object")
      return res.status(400).json("gallery has to be an array");
    var temp = 0;
    data.gallery.map((item) => {
      if (!item.link || !isString(item.link)) {
        temp++;
        if (!item.link)
          return res.status(400).json("Link is required in gallery array");

        return res.status(400).json("Link has to be a string in gallery array");
      }
      if (item.alt && !isString(item.alt)) {
        temp++;

        return res.status(400).json("alt has to be a String in gallery array");
      }
    });
    if (temp != 0) return;
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
