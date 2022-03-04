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

// @route POST /login
// @desc Login User with email and passowrd
// @access Public

router.post("/login", loginValidation, validator, authController.loginUser);

// @route POST /register
// @desc Register User with name, email and passowrd
// @access Public

router.post(
  "/register",
  registerValidation,
  validator,
  authController.registerUser
);

module.exports = router;
