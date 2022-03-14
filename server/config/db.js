const mongoose = require("mongoose");

const db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connection is Established !");
  } catch (err) {}
};

module.exports = connectDB;
