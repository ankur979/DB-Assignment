const express = require("express");
const router = express.Router();
const {
  addProductCategory,
} = require("../controllers/productCategoryController.js");
const { addProduct } = require("../controllers/productController.js");
const { addDiscount } = require("../controllers/discountController");
const {
  addProductInventory,
} = require("../controllers/productInventoryController");

// Message routes
router.post("/product", addProduct);
router.post("/category", addProductCategory);
router.post("/discount", addDiscount);
router.post("/inventory", addProductInventory);

module.exports = router;
