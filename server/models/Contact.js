const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  photo: {
    type: String,
    default:
      "https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?k=20&m=1300972573&s=612x612&w=0&h=Tiwi8Y0q8FBg8nL0i5GL_GslELTVLKkEB2e6m63Jlcg=",
  },
  address: {
    type: String,
  },
  favourite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
