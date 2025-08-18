// auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();

const router = express.Router();

// Google OAuth2 client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Your MongoDB User model
const User = require("../models/userDetail"); 


// Google login route
router.post("/google-login", async (req, res) => {
  try {
    const { token } = req.body; // Token from frontend

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user
      user = await User.create({
        googleId: sub,
        email,
        name,
        picture,
      });
    }

    // Create JWT token for session
    const jwtToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      token: jwtToken,
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ success: false, message: "Google authentication failed" });
  }
});

module.exports = router;
