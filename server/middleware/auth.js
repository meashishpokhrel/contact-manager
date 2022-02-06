const jwt = require("jsonwebtoken");
const jwtKey = process.env.jwtKey;

const auth = (req, res, next) => {
  // Here we are taking token from Header

  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization Failed !" });
  }

  try {
    const decrypted = jwt.verify(token, jwtKey);

    req.user = decrypted.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token in Invalid !" });
  }
};

module.exports = auth;
