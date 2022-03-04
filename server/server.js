const express = require("express");

const contact = require("./routes/contact");
const path = require("path");

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
app.use(express.json({ limit: "5MB" }));
// send back the responses in json format

// Routes

app.use("/api/auth", authUser);
app.use("/api/contacts", contact);

//Build path
app.use(express.static(path.resolve(__dirname, "../client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

//COnfiguting the Server
app.listen(port, () => {
  console.log("Listening on Port " + port);
});
