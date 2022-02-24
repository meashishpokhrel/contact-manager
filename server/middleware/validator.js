const { validationResult } = require("express-validator");

exports.validator = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    let error = errors.array()[0];
    return res.status(422).json({
      success: false,
      message: error.msg,
    });
  }
  next();
};
