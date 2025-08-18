const Bid = require("../models/Bid");

// GET /api/bids - get all pending bids
const getBids = async (req, res) => {
  try {
    const bids = await Bid.find();
    res.json(bids);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bids" });
  }
};

// POST /api/bids - add a new bid (limit order)
const addBid = async (req, res) => {
  try {
    const { symbol, bidPrice, quantity, isMatched } = req.body;
    const newBid = new Bid({ symbol, bidPrice, quantity, isMatched });
    const savedBid = await newBid.save();
    res.status(201).json(savedBid);
  } catch (error) {
    res.status(400).json({ error: "Failed to add bid" });
  }
};

// PUT /api/bids/:id - update a bid
const updateBid = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Bid.findByIdAndUpdate(id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Bid not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: "Failed to update bid" });
  }
};

// DELETE /api/bids/:id - delete a bid
const deleteBid = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Bid.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Bid not found" });
    res.json({ message: "Bid deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete bid" });
  }
};

module.exports = { getBids, addBid, updateBid, deleteBid };
