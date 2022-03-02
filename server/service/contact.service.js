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
  updateContact,
};
