const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register a user
//@route POST /api/users/register
//@access Public
const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check if all fields are filled
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  // Check if user already exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user in DB
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log(`User created: ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.status(201).json({ message: "User registered" });
});

//@desc Login a user
//@route POST /api/users/login
//@access Public
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ message: "User logged in", user: { email } });
});

//@desc Current user info
//@route GET /api/users/current
//@access Private
const currentUser = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  res.status(200).json({ message: "Current user", user: { email } });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
