const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  quantity: { type: Number, required: true },
  buyPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  dayChangePercent: { type: Number, required: true },
});

const Position = mongoose.model("Position", positionSchema);
module.exports = Position;
