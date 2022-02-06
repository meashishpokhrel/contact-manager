const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv").config();
const jwtKey = process.env.jwtKey;
const { body, validationResult, check } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// api/signin
//Getting logged in  User
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

//Authenticating user and getting the token
router.post(
  "/",
  body("email").isEmail(),
  body("password").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array() });
    }

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
      const payload = {
        user: {
          id: user.id,
        },
      };

      //TO Generate a token and also expiring it in some time
      jwt.sign(
        payload,
        jwtKey,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch {
      console.error(err.message);
      res.status(500).send("server error !");
    }
  }
);

module.exports = router;
