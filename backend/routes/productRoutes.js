// backend/routes/productRoutes.js
const express = require("express");
const Product = require("../models/product");
const { protect, admin } = require("../middleware/auth");

const router = express.Router();

// Add middleware to protect product routes
router.post("/", protect, admin, async (req, res) => {
  const { name, description, price, image, category } = req.body;
  try {
    const newProduct = new Product({ name, description, price, image, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: "Error creating product", error: err.message });
  }
});

// Other routes (get, update, delete) should also include protect and admin middleware

// Get All Products (For Admin/General Use)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", error: err.message });
  }
});

// Update Product (Admin Only)
router.put("/:id", protect, admin, async (req, res) => {
  const { name, description, price, image, category } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image, category },
      { new: true }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error updating product", error: err.message });
  }
});

// Delete Product (Admin Only)
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting product", error: err.message });
  }
});

module.exports = router;
