const isString = (data) => {
  if (typeof data === "string") {
    return true;
  }
  return false;
};

const isNumber = (data) => {
  if (typeof data === "number") {
    return true;
  }
  return false;
};

module.exports = { isNumber, isString };
