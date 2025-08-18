const Position = require("../models/Position.js");

// Helper: Calculate Unrealized P/L
function calculateUnrealizedPL(position) {
  return (position.currentPrice - position.buyPrice) * position.quantity;
}

// GET /api/positions
const getPositions = async (req, res) => {
  try {
    const positions = await Position.find();
    const enrichedPositions = positions.map((pos) => ({
      id: pos._id,
      symbol: pos.symbol,
      quantity: pos.quantity,
      buyPrice: pos.buyPrice,
      currentPrice: pos.currentPrice,
      dayChangePercent: pos.dayChangePercent,
      unrealizedPL: calculateUnrealizedPL(pos),
    }));
    res.json(enrichedPositions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
};

// POST /api/positions
const addPosition = async (req, res) => {
  try {
    const { symbol, quantity, buyPrice, currentPrice, dayChangePercent } = req.body;
    const newPosition = new Position({ symbol, quantity, buyPrice, currentPrice, dayChangePercent });
    const savedPosition = await newPosition.save();
    res.status(201).json(savedPosition);
  } catch (error) {
    res.status(400).json({ error: "Failed to add position" });
  }
};

// PUT /api/positions/:id
const updatePosition = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Position.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Position not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: "Failed to update position" });
  }
};

// DELETE /api/positions/:id
const deletePosition = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Position.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Position not found" });
    res.json({ message: "Position deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete position" });
  }
};

module.exports = {
  getPositions,
  addPosition,
  updatePosition,
  deletePosition,
};
