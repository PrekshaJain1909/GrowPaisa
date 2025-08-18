const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  symbol: { type: String, required: true },          // stock name/symbol
  bidPrice: { type: Number, required: true },        // bid price
  quantity: { type: Number, required: true },        // quantity in the order
  isMatched: { type: Boolean, default: false },      // matched with a seller yet?
}, { timestamps: true });

const Bid = mongoose.model("Bid", bidSchema);
module.exports = Bid;
