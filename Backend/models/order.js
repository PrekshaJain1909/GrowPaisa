// models/order.js
const mongoose = require("mongoose");

// Define Order Schema
const orderSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  symbol: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ["BUY", "SELL"], required: true },
  status: { type: String, enum: ["PENDING", "COMPLETED", "CANCELLED"], default: "PENDING" },
  timestamp: { type: Date, default: Date.now }
});

// Create and export model
module.exports = mongoose.model("Order", orderSchema);
