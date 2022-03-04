const User = require("../models/User");
const bcrypt = require("bcryptjs");

/**
 * Login with username and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<token>}
 */
const loginUser = async (email, password) => {
  try {
    let user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw { message: "Invalid Credentials !" };
    }
    const token = user.getSignedToken(user);
    return token;
  } catch (err) {
    console.error(err?.message);
    throw { message: err?.message };
  }
};

/**
 * Register with name, password, email
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @returns {Promise<token>}
 */
const registerUser = async (name, email, password) => {
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw { message: "Email already Exists !" };
    }
    const newUser = new User({
      name,
      email,
      password,
    });

    //Before saving it in the Database, hasing or encrypting the password using bcrypt
    const salt = await bcrypt.genSalt(10); //gensalt method that bcrypt provides, 10 round is default one
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();

    const token = newUser.getSignedToken(newUser);

    return token;
  } catch (err) {
    console.error(err.message);
    throw { message: err.message };
  }
};

module.exports = {
  loginUser,
  registerUser,
};
