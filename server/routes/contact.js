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

// api/contacts
//Getting all users contacts
router.get("/", auth, contactController.getContacts);

router.get("/:id", auth, contactController.getOneContact);

router.post(
  "/",
  auth,
  uploadContactPhoto,
  getContactPhotoUrl,
  contactValidation,
  validator,
  contactController.createContact
);

router.put(
  "/:id",
  auth,
  uploadContactPhoto,
  getContactPhotoUrl,
  contactValidation,
  validator,
  contactController.updateContact
);

router.delete("/:id", auth, contactController.deleteContact);

module.exports = router;
