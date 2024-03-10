const Discount = require("../models/discount");

const addDiscount = async (req, res) => {
  try {
    const { name, desc, discountPercent } = req.body;

    let newDiscount = await Discount.create({
      name,
      desc,
      discountPercent,
    });

    res.status(201).json(newDiscount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addDiscount };
