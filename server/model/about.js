const mongoose = require("mongoose");

const About = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("About", About);
