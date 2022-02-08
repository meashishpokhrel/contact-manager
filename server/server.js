const express = require("express");

const contact = require("./routes/contact");
const regUser = require("./routes/user");
const authUser = require("./routes/auth");
const ConnectDB = require("./config/db");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");

app.get("/", (req, res) => res.json({ msg: "Welcome to the Assignment" }));

//COnnecting Database
ConnectDB();

//middlewares
app.use(express.json()); // send back the responses in json format
app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
// Routes
app.use("/api/user", regUser);
app.use("/api/auth", authUser);
app.use("/api/contacts", contact);

//COnfiguting the Server
app.listen(port, () => {
  console.log("Listening on Port " + port);
});
