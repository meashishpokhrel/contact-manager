const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const jwtKey = process.env.jwtKey;

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.getSignedToken = (user) => {
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    jwtKey,
    {
      expiresIn: 300,
    }
  );
  return token;
};

module.exports = mongoose.model("user", UserSchema);
