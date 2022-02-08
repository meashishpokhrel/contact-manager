const express = require("express");
const { body, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const multer = require("multer");
const upload = multer;
({ dest: "uploads/" });
const User = require("../models/User");
const Contact = require("../models/Contact");

const router = express.Router();

// api/contacts
//Getting all users contacts
router.get("/", auth, async (req, res) => {
  try {
    console.log(req.user);
    const contacts = await Contact.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    console.log(contacts);
    res.json(contacts);
    // res.json({msg: "get ready"})
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error !" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    console.log(req.user);
    // const contacts = await Contact.findOne(_id: req.params._id)
    const contacts = await Contact.findById(req.params.id);
    console.log(contacts);
    res.json(contacts);
    // res.json({msg: "get ready"})
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error !" });
  }
});

router.post(
  "/",
  auth,
  body("name").not().isEmpty(),
  body("email").isEmail(),
  body("phone").not().isEmpty(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array() });
    }
    const { name, email, phone, photo, address, favourite } = req.body;
    try {
      const checkContact = await Contact.findOne({ phone: req.body.phone });
      if (checkContact) {
        return res.status(400).json({ msg: "Phone NUmber Exists" });
      }
      const newContact = new Contact({
        user: req.user._id,
        name,
        email,
        phone,
        photo,
        address,
        favourite,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(501).json({ msg: "Server Failed !" });
    }
  }
);

router.put("/:id", auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    console.log(contact);
    if (!contact) {
      return res.status(404).json({
        msg: "Contact not found.",
      });
    }
    if (contact && contact.user.toString() !== req.user._id) {
      return res.status(401).json({
        msg: "Unauthorized.",
      });
    }
    const isDuplicate = await Contact.findOne({ phone: req.body.phone });
    console.log({ isDuplicate });
    if (isDuplicate && isDuplicate.user.toString() !== req.user._id) {
      return res.status(400).json({
        mesg: "Phone number already exists.",
      });
    }
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.json(updatedContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    console.log(contact);
    if (!contact) {
      return res.status(404).json({
        msg: "Contact not found.",
      });
    }
    if (contact && contact.user.toString() !== req.user._id) {
      return res.status(401).json({
        msg: "Unauthorized.",
      });
    }

    await Contact.findByIdAndRemove(req.params.id);
    return res.status(200).json({ msg: "Deleted Successfully !" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
