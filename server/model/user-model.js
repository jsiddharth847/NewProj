const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
   
  },

  email: {
    type: String,
    required:[true, 'Email is required.'],
    trim: true,
  },

  phone: {
    type: String,
    required: [true, 'Please add phone number.'],
  },

  password: {
    type: String,
    required: [true, 'Password is required.'],
    trim: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
