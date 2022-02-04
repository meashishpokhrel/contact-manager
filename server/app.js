const express = require("express")

const mongoose = require("mongoose")
const port = process.env.PORT || 3000
const app = express()

//middlewares
app.use(experss.json()) // send back the responses in json format

//Routes 
app.get("/",(req,res)=> {
    res.send("Hello world")
})


//COnfiguting the Server
app.listen(port, ()=> {
    console.log("Listening on Port "+ port)
})