const mongoose = require("mongoose");

const DonateSchema = new mongoose.Schema({
  tree: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  user_message: {
    type: String,
    required: true,
  },
  anonymous: {
    type: Boolean,
    default: false,
  },
  public: {
    type: Boolean,
    default: false,
  },
  selectType: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Donate", DonateSchema);
