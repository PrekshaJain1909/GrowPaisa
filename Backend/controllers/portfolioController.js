const PortfolioHolding = require("../models/portfolioHolding");

exports.seedPortfolio = async (req, res) => {
  const data = [
    { name: "Kotak Emerging Equity Fund", qty: 22.151, avgCost: 135.43, ltp: 147.698, invested: 2999.8, curVal: 3271.66, pnl: 271.86, netChg: "+9.06%", dayChg: "+0.68%" },
    { name: "Motilal Oswal Flexi Cap Fund", qty: 35.79, avgCost: 62.86, ltp: 66.543, invested: 2249.91, curVal: 2381.56, pnl: 131.65, netChg: "+5.85%", dayChg: "+2.22%" },
    { name: "Motilal Oswal Large and Midcap Fund", qty: 269.357, avgCost: 29.7, ltp: 35.446, invested: 7999.58, curVal: 9547.71, pnl: 1548.13, netChg: "+19.35%", dayChg: "+1.81%" },
    { name: "Motilal Oswal Midcap Fundss", qty: 9.115, avgCost: 109.71, ltp: 113.707, invested: 999.97, curVal: 1036.44, pnl: 36.47, netChg: "+3.65%", dayChg: "+1.46%" }
  ];

  try {
    for (const item of data) {
      await PortfolioHolding.findOneAndUpdate({ name: item.name }, { $set: item }, { upsert: true, new: true });
    }
    res.send("Portfolio data seeded successfully");
  } catch (err) {
    res.status(500).json({ error: "Seeding failed" });
  }
};

exports.getPortfolio = async (req, res) => {
  try {
    const holdings = await PortfolioHolding.find();
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ error: "Error fetching portfolio data" });
  }
};
