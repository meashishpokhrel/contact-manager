const jwt = require("jsonwebtoken");
const jwtKey = process.env.jwtKey;
const dotenv = require("dotenv");
dotenv.config();

const auth = (req, res, next) => {
  // Here we are taking token from Header

  const token = req.header("x-auth-token");
  console.log("token" + token);
  console.log("jwtkey" + jwtKey);
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization Failed !" });
  }

  try {
    console.log({ jwtKey: process.env.jwtKey });
    const decrypted = jwt.verify(token, process.env.jwtKey);
    console.log({ decrypted });
    req.user = { _id: decrypted._id };

    next();
  } catch (err) {
    console.log("ERR", err);
    res.status(401).json({ msg: "Token in Invalid !" });
  }
};

module.exports = auth;
