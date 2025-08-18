const mongoose = require("mongoose");

const holdingSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avgCost: Number,
  ltp: Number
});

holdingSchema.virtual("invested").get(function () {
  return this.qty * this.avgCost;
});
holdingSchema.virtual("curVal").get(function () {
  return this.qty * this.ltp;
});
holdingSchema.virtual("pnl").get(function () {
  return this.curVal - this.invested;
});

holdingSchema.set("toJSON", { virtuals: true });
holdingSchema.set("toObject", { virtuals: true });

module.exports = mongoose.model("Holding", holdingSchema);
