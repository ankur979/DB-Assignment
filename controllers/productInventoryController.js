const ProductInventory = require("../models/productInventory");

const addProductInventory = async (req, res) => {
  try {
    const { quantity } = req.body;

    let newProductInventory = await ProductInventory.create({ quantity });

    res.status(201).json(newProductInventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addProductInventory };
