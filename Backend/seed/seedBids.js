const mongoose = require("mongoose");
const Bid = require("../models/Bid");

const bids = [
  { symbol: "AAPL", bidPrice: 140.5, quantity: 100, isMatched: false },
  { symbol: "GOOG", bidPrice: 2700, quantity: 50, isMatched: true },
  { symbol: "TSLA", bidPrice: 700.75, quantity: 30, isMatched: false },
  { symbol: "MSFT", bidPrice: 299.99, quantity: 200, isMatched: true },
  { symbol: "AMZN", bidPrice: 3300.0, quantity: 10, isMatched: false },
];

async function seed() {
  try {
    await mongoose.connect("mongodb://localhost:27017/growpaisa", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Bid.deleteMany({});
    await Bid.insertMany(bids);
    console.log("Seed data inserted successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Seed error:", err);
    mongoose.connection.close();
  }
}

seed();
