const ProductCategory = require("../models/productCategory");

const addProductCategory = async (req, res) => {
  try {
    const { name, desc } = req.body;

    let newProductCategory = await ProductCategory.create({
      name,
      desc,
    });

    res.status(201).json(newProductCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addProductCategory };
