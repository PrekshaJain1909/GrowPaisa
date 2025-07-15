const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userDetail"); // Adjust the path as necessary
const PortfolioHolding = require("./models/portfolioHolding"); // Adjust the path as necessary
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express. json());

const PORT=process.env.PORT || 5000;
const uri = process.env.MONGO_URI // Replace with your MongoDB URI

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// POST route to save user
app.post("/api/signup", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Manual check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newUser = new User({ fullName, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    if (err.code === 11000) {
      // MongoDB duplicate key error
      return res.status(400).json({ error: "Email already registered" });
    }
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(PORT, () => console.log("Server running on port 5000"));
// Signin Route - validate email and password from MongoDB
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received signin request:", req.body);


  try {
    // Find user with matching email
    console.log("Received signin request:", req.body);
const user = await User.findOne({ email: email.trim().toLowerCase() });
console.log("Fetched user:", user);

if (user) {
  console.log("Entered password:", password.trim());
  console.log("Stored password:", user.password);
}
 else {
  setServerError(res.data.message || "Invalid email or password");
}



    if (!user) {
      return res.status(401).json({ success: false, message: "Email not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }

    // If valid
    res.status(200).json({ success: true, message: "Login successful" });

  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
app.get("/api/portfolio/seed", async (req, res) => {
  const data = [
    {
      name: "Kotak Emerging Equity Fund",
      qty: 22.151,
      avgCost: 135.43,
      ltp: 147.698,
      invested: 2999.8,
      curVal: 3271.66,
      pnl: 271.86,
      netChg: "+9.06%",
      dayChg: "+0.68%",
    },
    {
      name: "Motilal Oswal Flexi Cap Fund",
      qty: 35.79,
      avgCost: 62.86,
      ltp: 66.543,
      invested: 2249.91,
      curVal: 2381.56,
      pnl: 131.65,
      netChg: "+5.85%",
      dayChg: "+2.22%",
    },
    {
      name: "Motilal Oswal Large and Midcap Fund",
      qty: 269.357,
      avgCost: 29.7,
      ltp: 35.446,
      invested: 7999.58,
      curVal: 9547.71,
      pnl: 1548.13,
      netChg: "+19.35%",
      dayChg: "+1.81%",
    },
    {
      name: "Motilal Oswal Midcap Fundss",
      qty: 9.115,
      avgCost: 109.71,
      ltp: 113.707,
      invested: 999.97,
      curVal: 1036.44,
      pnl: 36.47,
      netChg: "+3.65%",
      dayChg: "+1.46%",
    },
  ];

  try {
    for (const item of data) {
      await PortfolioHolding.findOneAndUpdate(
        { name: item.name },
        { $set: item },
        { upsert: true, new: true }
      );
    }

    res.send("Portfolio data seeded");
  } catch (err) {
    res.status(500).json({ error: "Seeding failed" });
  }
});

// Get holdings
app.get("/api/portfolio", async (req, res) => {
  try {
    const holdings = await PortfolioHolding.find();
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));