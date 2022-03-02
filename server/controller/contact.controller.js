const Contact = require("../models/Contact");

const ContactService = require("../service/contact.service");

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: err.message });
  }
};

const getOneContact = async (req, res) => {
  try {
    const contacts = await Contact.findById(req.params.id);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const createContact = async (req, res) => {
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
    res.status(501).json({ msg: "Server Failed from Get!" });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
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
};

const updateContact = async (req, res) => {
  try {
    // const contact = await Contact.findById(req.params.id);
    // if (!contact) {
    //   return res.status(404).json({
    //     msg: "Contact not found.",
    //   });
    // }
    // if (contact && contact.user.toString() !== req.user._id) {
    //   return res.status(401).json({
    //     msg: "Unauthorized.",
    //   });
    // }
    // const isDuplicate = await Contact.findOne({ phone: req.body.phone });
    // if (isDuplicate && isDuplicate.user.toString() !== req.user._id) {
    //   return res.status(400).json({
    //     mesg: "Phone number already exists.",
    //   });
    // }
    // const updatedContact = await Contact.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { new: true }
    // );
    const updatedContact = await ContactService.updateContact(
      req.params.id,
      req.user._id,
      req.body
    );
    return res.json(updatedContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = {
  getContacts,
  getOneContact,
  createContact,
  deleteContact,
  updateContact,
};
