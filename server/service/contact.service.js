const Contact = require("../models/Contact");

/**
 * Get contacts with user ID
 * @param {string} userID
 * @returns {Promise<Contacts>}
 */

const getContacts = async (userID) => {
  try {
    const contacts = await Contact.find({ user: userID }).sort({
      createdAt: -1,
    });
    return contacts;
  } catch (err) {
    console.error(err.message);
    throw { msg: err.message };
  }
};

/**
 * Get One contacts with user ID
 * @param {string} userID
 * @returns {Promise<Contacts>}
 */
const getOneContact = async (id) => {
  try {
    const contacts = await Contact.findById(id);
    return contacts;
  } catch (err) {
    throw { message: err.message };
  }
};

/**
 * Create contact with user ID and  COntact Detail
 * @param {string} userID
 * @param {object} contactDetail
 * @returns {Promise<New Contacts>}
 */

const createContact = async (userID, contactDetail) => {
  const { name, email, phone, photo, address, favourite } = contactDetail;
  try {
    const checkContact = await Contact.findOne({ phone });

    if (checkContact) {
      throw { message: "Contact already created with Same Number! " };
    }

    const newContact = new Contact({
      user: userID,
      name,
      email,
      phone,
      photo,
      address,
      favourite,
    });
    const contact = await newContact.save();
    return contact;
  } catch (err) {
    console.error(err.message);
    throw { message: err.message };
  }
};

/**
 *Delete contact with user ID
 * @param {string} id -> rep.params.id
 * @param {string} userID -> req.user._id
 * @returns {Promise}
 */
const deleteContact = async (id, userID) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      throw {
        message: "Contact not found.",
      };
    }
    if (contact && contact.user.toString() !== userID) {
      throw {
        message: "Unauthorized.",
      };
    }

    return await Contact.findByIdAndRemove(id);
    // throw { message: "Deleted Successfully !" };
  } catch (err) {
    console.error(err.message);
    throw { message: "Server Error" };
  }
};

/**
 *Update  contact with id, UserID, contactDetail
 * @param {string} id -> rep.params.id
 * @param {string} userID -> req.user._id
 * @param {Object} updateContact -> req.user._id
 * @returns {Promise<UpdatedCOntact>}
 */

const updateContact = async (id, userID, updateContact) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      throw {
        msg: "Contact not found.",
      };
    }
    if (contact && contact.user.toString() !== userID) {
      throw {
        msg: "Unauthorized.",
      };
    }
    const isDuplicate = await Contact.findOne({ phone: updateContact.phone });
    if (isDuplicate && isDuplicate.user.toString() !== userID) {
      throw {
        msg: "Phone number already exists.",
      };
    }
    const modifiedContact = await Contact.findByIdAndUpdate(
      id,
      updateContact,
      { new: true, runValidators: true } //New data update bhayepachi ko aaucha
    );
    return modifiedContact;
  } catch (err) {
    console.error(err.message);
    throw { msg: "Server Error" };
  }
};

module.exports = {
  getContacts,
  getOneContact,
  createContact,
  deleteContact,
  updateContact,
};
