const express = require("express")

const mongoose = require("mongoose")
const routes = require("./routes/auth")
// const DBConnection = require("./config/db")
const port = process.env.PORT || 3000
const app = express()

app.get("/", (req,res) => res.json({msg: "Welcome to the powe"}))

//middlewares
app.use(express.json()) // send back the responses in json format

//Routes 
// app.use("/api", routes)
// app.use("api/auth", require("./routes/auth"))

//COnfiguting the Server
app.listen(port, ()=> {

    console.log("Listening on Port "+ port)
})