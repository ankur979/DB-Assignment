const mongoose = require("mongoose");

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

const ProductInventory = mongoose.model(
  "ProductInventory",
  productInventorySchema
);

module.exports = ProductInventory;
