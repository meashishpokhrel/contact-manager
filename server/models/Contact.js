const mongoose = require("mongoose")


const ContactSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
  name:{
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
    },
    address: {
        type: String,
    },
    favourite:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("contact", ContactSchema)