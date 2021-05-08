const mongoose = require("mongoose");

const Plants = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sciname: {
    type: String,
    required: true,
  },
  family: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    require: true,
    unique: true,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Plants", Plants);
