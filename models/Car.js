const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  maker: { type: String, required: true },
  description: { type: String}
}, { timestamps: true });

module.exports = mongoose.model('car', carSchema);
