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

const productInventorySchema = new mongoose.Schema({
  quantity: {
    type: Number,
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

const Discount = mongoose.model("Discount", discountSchema);

const ProductCategory = mongoose.model(
  "ProductCategory",
  productCategorySchema
);

const ProductInventory = mongoose.model(
  "ProductInventory",
  productInventorySchema
);

module.exports = { Product, Discount, ProductCategory, ProductInventory };
