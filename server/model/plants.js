const mongoose = require("mongoose");

const Plants = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subname: {
    type: String,
    required: false,
  },
  des: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Plants", Plants);
