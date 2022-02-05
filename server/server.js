const express = require("express")

const mongoose = require("mongoose")
const contact = require("./routes/contact")
const regUser = require("./routes/user")
const authUser = require("./routes/auth")
// const DBConnection = require("./config/db")
const port = process.env.PORT || 3000
const app = express()

app.get("/", (req,res) => res.json({msg: "Welcome to the Assignment"}))

//middlewares
app.use(express.json()) // send back the responses in json format

// Routes 
app.use("/api/user", regUser)
app.use("/api/auth", authUser)
app.use("/api/contacts", contact)

//COnfiguting the Server
app.listen(port, ()=> {

    console.log("Listening on Port "+ port)
})