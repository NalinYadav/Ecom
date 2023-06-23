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

const isBool = (data) => {
  if (typeof data === "boolean") {
    return true;
  }
  return false;
};

const isValidId = (id) => {
  return id.match(/^[0-9a-fA-F]{24}$/);
};

module.exports = { isNumber, isString, isBool, isValidId };
