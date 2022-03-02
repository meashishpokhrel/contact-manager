const Contact = require("../models/Contact");

// const loginUser = async (email, password) => {
//   try {
//     let user = await User.findOne({ email });

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       throw { msg: "Invalid Credentials !" };
//     }
//     const token = user.getSignedToken(user);
//     return token;
//   } catch (err) {
//     console.error(err?.message);
//     throw { msg: "IServer Error !" };
//   }
// };

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

const getOneContact = async (id) => {
  try {
    const contacts = await Contact.findById(id);
    return contacts;
  } catch (err) {
    throw { message: err.message };
  }
};
const createContact = async (userID, contactDetail) => {
  const { name, email, phone, photo, address, favourite } = contactDetail;
  try {
    const checkContact = await Contact.findOne({ phone });

    if (checkContact) {
      throw { message: "Phone Number Exists" };
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
    throw { message: "Server Failed from Get!" };
  }
};

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

    await Contact.findByIdAndRemove(id);
    throw { message: "Deleted Successfully !" };
  } catch (err) {
    console.error(err.message);
    throw { message: "Server Error" };
  }
};
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
