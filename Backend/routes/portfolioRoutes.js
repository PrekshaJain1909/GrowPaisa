const express = require("express");
const PortfolioHolding = require("../models/portfolioHolding");
const { seedPortfolio, getPortfolio } = require("../controllers/portfolioController");
const router = express.Router();
router.get("/seed", seedPortfolio);
router.get("/", getPortfolio);

module.exports = router;

// GET all portfolio holdings
router.get("/", async (req, res) => {
  try {
    const holdings = await PortfolioHolding.find();
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ error: "Error fetching portfolio data" });
  }
});

// POST a new holding
router.post("/", async (req, res) => {
  try {
    const newHolding = new PortfolioHolding(req.body);
    await newHolding.save();
    res.status(201).json(newHolding);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE a holding
router.put("/:id", async (req, res) => {
  try {
    const updatedHolding = await PortfolioHolding.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedHolding);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a holding
router.delete("/:id", async (req, res) => {
  try {
    await PortfolioHolding.findByIdAndDelete(req.params.id);
    res.json({ message: "Holding deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // ✅ Important: export the router
