const mongoose = require("mongoose");

const Initation = new mongoose.Schema({
  title: {
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
  create_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Initation", Initation);
