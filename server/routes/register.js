const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const jwtKey = process.env.jwtKey;
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
// api/signup
//Registering a User
router.post(
  "/",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array() });
    }
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

      res.send(token);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;