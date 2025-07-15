const mongoose = require("mongoose");
const portfolioHoldingSchema = new mongoose.Schema({
     name: { type: String, required: true },
    qty: Number,
    avgCost: Number,
    ltp: Number,
    invested: Number,
    curVal: Number,
    pnl: Number,
    netChg: String,
    dayChg: String,
});
const PortfolioHolding = mongoose.model('PortfolioHolding', portfolioHoldingSchema);
module.exports=PortfolioHolding;