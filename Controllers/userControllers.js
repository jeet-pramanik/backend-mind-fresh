import User from "../models/User.js";

// Login Controllers here
// In userControllers.js
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    // Add proper hashing in production
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful", user });
};

// Register Controllers here
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Create a new user
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).json({ message: "User registered successfully" });
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json(users); // Send the users as a response
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
