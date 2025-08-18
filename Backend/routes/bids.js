const express = require("express");
const {
  getBids,
  addBid,
  updateBid,
  deleteBid,
} = require("../controllers/bidsController");

const router = express.Router();

router.get("/", getBids);
router.post("/", addBid);
router.put("/:id", updateBid);
router.delete("/:id", deleteBid);

module.exports = router;
