const { isString, isNumber, isBool } = require("../helper/helper");

const validateCollection = (req, res, next) => {
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

  if (data.type) {
    const enums = ["manual", "automated"];
    if (!enums.includes(data.status)) {
      return res
        .status(400)
        .json("Type must be one of the following: manual,automated");
    }
    if (!isString(data.display))
      return res.status(400).json("Type has to be a string");
  }

  if (data.conditions) {
    if (typeof data.conditions !== "object")
      return res.status(400).json("conditions has to be an array");
    var temp = 0;
    data.conditions.map((item) => {
      const enumA = ["name", "tag"];
      const enumB = [
        "is not equal to",
        "is equal to",
        "contains",
        "does not contain",
        "starts with",
        "ends with",
      ];

      if (!item.a || !isString(item.a)) {
        temp++;
        if (!item.a)
          return res.status(400).json("a is required in conditions array");

        return res.status(400).json("a has to be a string in conditions array");
      }
      if (!item.o || !isString(item.o)) {
        temp++;
        if (!item.o)
          return res.status(400).json("o is required in conditions array");

        return res.status(400).json("o has to be a string in conditions array");
      }

      if (!item.b || !isString(item.b)) {
        temp++;
        if (!item.b)
          return res.status(400).json("b is required in conditions array");

        return res.status(400).json("b has to be a string in conditions array");
      }

      if (!enumA.includes(item.a)) {
        temp++;
        return res
          .status(400)
          .json("a is invalid, select from available options");
      }

      if (!enumB.includes(item.o)) {
        temp++;
        return res
          .status(400)
          .json("o is invalid, select from available options");
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

module.exports = validateCollection;
