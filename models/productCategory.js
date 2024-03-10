const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  desc: {
    type: String,
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

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

module.exports = ProductCategory;
