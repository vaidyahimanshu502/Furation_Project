const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('user', UserSchema);
module.exports = User;