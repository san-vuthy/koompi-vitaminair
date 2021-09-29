const mongoose = require('mongoose');

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
  },
  user_message: {
    type: String,
    required: false,
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
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
  isContact: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model('Donate', DonateSchema);
