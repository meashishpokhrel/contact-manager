const User = require("../models/User");
const bcrypt = require("bcryptjs");
const AuthService = require("../service/auth.service");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await AuthService.loginUser(email, password);
    return res.send(token);
  } catch (err) {
    console.error(err?.message);
    res.status(500).send("server error !");
  }
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const token = await AuthService.registerUser(name, email, password);
    return res.send(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Server Error" });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
