const express = require("express")

const mongoose = require("mongoose")
const DBConnection = require("./config/db")
const port = process.env.PORT || 3000
const app = express()

//middlewares
app.use(express.json()) // send back the responses in json format

//Routes 
app.get("/",(req,res)=> {
    res.send("Hello world")
})


//COnfiguting the Server
app.listen(port, async ()=> {
    try{
        await DBConnection()
    }
    catch(err){
        console.log(err)
    }
    console.log("Listening on Port "+ port)
})