const multer = require("multer");
const cloudinary = require("../config/photoUpload");

const storage = multer.diskStorage({});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb(new Error("Not supported file type!"), false);
    }
  },
});

const singleUpload = upload.single("photo");
exports.uploadContactPhoto = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({ message: "Image upload fail!" });
    }
    next();
  });
};

exports.getContactPhotoUrl = async (req, res, next) => {
  try {
    if (req.body.photo) {
      const result = await cloudinary.uploader.upload(req.body.photo, {
        width: 500,
        height: 500,
        crop: "fill",
      });
      req.body.photo = result.url;
    } else {
      req.body.photo = "";
    }

    next();
  } catch (err) {
    next({
      message: "Image couldnot be uploaded",
    });
  }
};
