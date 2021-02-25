const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  fullname: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 60,
  },
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
})

module.exports = mongoose.model("User", UserSchema)
