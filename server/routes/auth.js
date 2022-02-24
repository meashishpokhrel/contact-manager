const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtKey = process.env.jwtKey;
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();
const authController = require("../controller/auth.controller");
const { validator } = require("../middleware/validator");
const {
  loginValidation,
  registerValidation,
} = require("../validator/user.validator");

//Authenticating user and getting the token
router.post("/login", loginValidation, validator, authController.loginUser);

router.post(
  "/register",
  registerValidation,
  validator,
  authController.registerUser
);

module.exports = router;
