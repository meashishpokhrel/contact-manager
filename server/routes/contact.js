const {
  uploadContactPhoto,
  getContactPhotoUrl,
} = require("../utils/photoUpload.js");
const express = require("express");
const { body, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const multer = require("multer");
const upload = multer;
({ dest: "uploads/" });
const User = require("../models/User");
const Contact = require("../models/Contact");
const contactController = require("../controller/contact.controller");
const { validator } = require("../middleware/validator");
const { contactValidation } = require("../validator/contact.validator");

const router = express.Router();

// @route GET /contacts
// @desc Get All Contacts
// @access Private
router.get("/", auth, contactController.getContacts);

// @route GET /contacts/:id
// @desc Get one Contacts
// @access Private
router.get("/:id", auth, contactController.getOneContact);

// @route POST /contacts
// @desc ADD Contacts
// @access Private
router.post(
  "/",
  auth,
  uploadContactPhoto,
  getContactPhotoUrl,
  contactValidation,
  validator,
  contactController.createContact
);

// @route PUT /contacts/:id
// @desc Edit Contacts
// @access Private

router.put(
  "/:id",
  auth,
  uploadContactPhoto,
  getContactPhotoUrl,
  contactValidation,
  validator,
  contactController.updateContact
);

// @route DELETE /contacts/:id
// @desc DELETE Contacts
// @access Private
router.delete("/:id", auth, contactController.deleteContact);

module.exports = router;
