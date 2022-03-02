const User = require("../models/User");
const bcrypt = require("bcryptjs");

const loginUser = async (email, password) => {
  try {
    let user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw { msg: "Invalid Credentials !" };
    }
    const token = user.getSignedToken(user);
    return token;
  } catch (err) {
    console.error(err?.message);
    throw { msg: "IServer Error !" };
  }
};

module.exports = {
  loginUser,
};
