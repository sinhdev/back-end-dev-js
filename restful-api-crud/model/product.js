const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String
  },
  unitPrice: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
})

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;