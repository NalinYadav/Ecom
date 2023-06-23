const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["manual", "automated"],
    default: "automated",
  },
  conditions: [
    {
      a: {
        type: String,
        enum: ["name", "tag"],
        default: "name",
        required: true,
      },
      o: {
        type: String,
        enum: [
          "is not equal to",
          "is equal to",
          "contains",
          "does not contain",
          "starts with",
          "ends with",
        ],
        default: "is equal to",
        required: true,
      },
      b: {
        type: String,
        required: true,
      },
    },
  ],

  image: {
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
    },
  },
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
