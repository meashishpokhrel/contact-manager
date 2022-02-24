const { check } = require("express-validator");

const name = check("name").trim().notEmpty().withMessage("Name is required.");
const phone = check("phone")
  .trim()
  .notEmpty()
  .withMessage("Phone is required.")
  .isLength({ min: 10, max: 10 })
  .withMessage("Phone must be 10 digits long.");

const email = check("email")
  .trim()
  .isEmail()
  .normalizeEmail()
  .withMessage("Email is invalid.");

const address = check("address")
  .trim()
  .notEmpty()
  .withMessage("Address is required.");

const contactValidation = [name, email, phone, address];

module.exports = { contactValidation };
