const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtKey = process.env.jwtKey;
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

//Authenticating user and getting the token
router.post(
  "/",
  body("email")
    .isEmail()
    .withMessage({ msg: "Please Enter Valid Email Address" }),
  body("password").exists().withMessage({ msg: "Please Enter Password" }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array() });
    }

    const { email, password } = req.body;
    console.log({ email, password });
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
        jwtKey
        // {
        //   expiresIn: 480000,
        // }
      );

      res.send(token);
    } catch (err) {
      console.error(err?.message);
      res.status(500).send("server error !");
    }
  }
);

module.exports = router;
