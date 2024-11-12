const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { genarateAccessToken } = require("../helpers/accessToken");
const { genarateRefreshToken } = require("./refreshToken");

const signup = async (req, res) => {
  const { username, email, password, accountType } = req.body;

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already in use" });
    }
    const securePassword = await bcrypt.hash(password, 10);

    user = new User({
      username,
      email,
      password: securePassword,
      accountType,
    });
    await user.save();

    return res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if(!user){
      return res.status(404).json({ success: false, message: "User not found"})
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword) res.status(400).json({success:false, message: "Invalid password"})

      const data = {
        id: user._id,
        accountType: user.accountType,
        author: user.username,
      }
      const accessToken = genarateAccessToken(data)
      const refreshToken = genarateRefreshToken(data)

      return res.status(200).json({
        success: true,
        message: "Login successful",
        accessToken,
        refreshToken,
        role: user.accountType,
        author: user.username,
      })

    
  } catch (error) {
    return res.status(500).json({success: false, message: error.message});
  }
};

module.exports = { login, signup };