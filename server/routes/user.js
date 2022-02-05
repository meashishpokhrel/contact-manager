const express = require("express")

const router = express.Router()

// api/signup
//Registering a User
router.post("/", (req,res)=> {
    res.send("Register a User !")
})

module.exports = router