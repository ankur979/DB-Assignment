const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 255,
  },
  desc: {
    type: String,
  },
  SKU: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductCategory",
    required: true,
  },
  inventoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductInventory",
  },
  price: {
    type: Number,
    required: true,
  },
  discountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Discount",
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

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
