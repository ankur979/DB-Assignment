const Product = require("../models/product.js");

const addProduct = async (req, res) => {
  try {
    const { name, desc, SKU, price, categoryId, inventoryId, discountId } =
      req.body;

    let newProduct = await Product.create({
      name,
      desc,
      price,
      categoryId,
      SKU,
      inventoryId,
      discountId,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addProduct };
