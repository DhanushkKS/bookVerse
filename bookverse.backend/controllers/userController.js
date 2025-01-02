const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.logIn(email, password);
    const token = await createToken(user._id);
    res.status(200).json({ email, token, id: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signUpUser = async (req, res) => {
  const { user } = req.body;
  try {
    const newUser = await User.registerUser(user);
    console.log("New user id", newUser);
    const token = await createToken(newUser._id);
    res.status(200).json({ newUser, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signOut
const logOutUser = (req, res) => {
  try {
    // Invalidate the token by simply informing the client to remove it
    res.status(200).json({ message: "User signed out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing out" });
  }
};

module.exports = {
  loginUser,
  signUpUser,
  logOutUser,
};
