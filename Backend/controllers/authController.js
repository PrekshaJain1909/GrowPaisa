const User = require("../models/userDetail");

exports.signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Email already exists" });

    const newUser = new User({ fullName, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ error: "Email already registered" });
    res.status(500).json({ error: "Server error" });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.trim().toLowerCase() });
    if (!user) return res.status(401).json({ success: false, message: "Email not found" });
    if (user.password !== password)
      return res.status(401).json({ success: false, message: "Incorrect password" });

    res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
