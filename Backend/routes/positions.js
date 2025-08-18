const express = require("express");
const {
  getPositions,
  addPosition,
  updatePosition,
  deletePosition,
} = require("../controllers/positionsController.js");

const router = express.Router();

router.get("/", getPositions);
router.post("/", addPosition);
router.put("/:id", updatePosition);
router.delete("/:id", deletePosition);

module.exports = router;
