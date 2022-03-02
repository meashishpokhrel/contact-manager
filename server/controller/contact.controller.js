const Contact = require("../models/Contact");

const ContactService = require("../service/contact.service");

const getContacts = async (req, res) => {
  try {
    const contacts = await ContactService.getContacts(req.user._id);
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};

const getOneContact = async (req, res) => {
  try {
    const contacts = await ContactService.getOneContact(req.params.id);
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createContact = async (req, res) => {
  try {
    const contact = await ContactService.createContact(req.user._id, req.body);
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(501).json({ message: err.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    await ContactService.deleteContact(req.params.id, req.user._id);
    return res.status(200).json({ message: "Deleted Successfully !" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const updatedContact = await ContactService.updateContact(
      req.params.id,
      req.user._id,
      req.body
    );
    return res.json(updatedContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getContacts,
  getOneContact,
  createContact,
  deleteContact,
  updateContact,
};
