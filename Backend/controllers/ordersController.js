const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const { userEmail, symbol, quantity, price, type } = req.body;
    const newOrder = new Order({
      userEmail,
      symbol,
      quantity,
      price,
      type,
      status: "COMPLETED",
    });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: "Failed to place order" });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ timestamp: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Error fetching orders" });
  }
};

exports.getOrdersByEmail = async (req, res) => {
  try {
    const orders = await Order.find({ userEmail: req.params.email }).sort({ timestamp: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Error fetching user's orders" });
  }
};

exports.cancelOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status: "CANCELLED" }, { new: true });
    res.json({ message: "Order cancelled", order: updatedOrder });
  } catch (err) {
    res.status(500).json({ error: "Failed to cancel order" });
  }
};
