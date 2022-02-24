const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtKey = process.env.jwtKey;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials !" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials ! " });
    }

    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      jwtKey,
      {
        expiresIn: 480000,
      }
    );

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
    user = new User({
      name,
      email,
      password,
    });

    //Before saving it in the Database, hasing or encrypting the password using bcrypt
    const salt = await bcrypt.genSalt(10); //gensalt method that bcrypt provides, 10 round is default one
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      jwtKey
    );

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
