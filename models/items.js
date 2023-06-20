const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    qty: {
        type: Number,
        required: true,
        unique: false
    },
    price: {
        type: Number,
        required: true,
        unique: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
  },
  {
    timestamps: true
  }
)

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;