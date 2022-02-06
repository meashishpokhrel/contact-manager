const mongoose = require("mongoose");

const db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB COnnected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
