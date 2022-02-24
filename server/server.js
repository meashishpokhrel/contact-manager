const express = require("express");

const contact = require("./routes/contact");

const authUser = require("./routes/auth");
const ConnectDB = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");

//COnnecting Database
ConnectDB();

//middlewares
app.use(cors());
app.use(express.json()); // send back the responses in json format

// Routes

app.use("/api/auth", authUser);
app.use("/api/contacts", contact);

//COnfiguting the Server
app.listen(port, () => {
  console.log("Listening on Port " + port);
});
