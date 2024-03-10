const mongoose = require("mongoose");

const discountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  desc: {
    type: String,
  },
  discountPercent: {
    type: Number,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
  },
});

const Discount = mongoose.model("Discount", discountSchema);

module.exports = Discount;
