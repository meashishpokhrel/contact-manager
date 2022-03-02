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
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "Email already Exists !" });
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    //Before saving it in the Database, hasing or encrypting the password using bcrypt
    const salt = await bcrypt.genSalt(10); //gensalt method that bcrypt provides, 10 round is default one
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();

    const token = newUser.getSignedToken(newUser);

    return res.send(token);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  loginUser,
  registerUser,
};
