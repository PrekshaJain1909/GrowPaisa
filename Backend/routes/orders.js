const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const auth = require("../middleware/auth");
const { createOrder, getOrders, getOrdersByEmail, cancelOrder } = require("../controllers/ordersController");


router.post("/", createOrder);
router.get("/", getOrders);
router.get("/:email", getOrdersByEmail);
router.delete("/:id", cancelOrder);

module.exports = router;

// ✅ 1. GET all orders for logged-in user
router.get("/orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({ userEmail: req.user.email });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// ✅ 2. POST a new order (only for logged-in user)
router.post("/orders", auth, async (req, res) => {
  try {
    const { symbol, quantity, price, type } = req.body;

    // Basic validation
    if (!symbol || !quantity || !price || !type) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newOrder = new Order({
      userEmail: req.user.email,
      symbol,
      quantity,
      price,
      type
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: "Failed to create order" });
  }
});

// ✅ 3. UPDATE order status (only for that user’s orders)
router.put("/orders/:id", auth, async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) {
      return res.status(400).json({ error: "Status is required" });
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { _id: req.params.id, userEmail: req.user.email },
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found or not yours" });
    }

    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ error: "Failed to update order" });
  }
});

// ✅ 4. DELETE order (only if it belongs to the user)
router.delete("/orders/:id", auth, async (req, res) => {
  try {
    const deletedOrder = await Order.findOneAndDelete({
      _id: req.params.id,
      userEmail: req.user.email
    });

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found or not yours" });
    }

    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete order" });
  }
});

module.exports = router;
