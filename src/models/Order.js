const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  mainDish: { type: String, required: true },
  sideDish: { type: String, required: true },
  mainDishPrice: { type: Number, required: true },
  sideDishPrice: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
