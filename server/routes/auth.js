const express = require("express")

const router = express.Router()

// api/signin
//Getting logged in  User
router.get("/", (req,res)=> {
    res.send("Get logged in User !")
})


//Authenticating user and getting the token

router.post("/", (req,res)=> {
    res.send("Log in User !")
})

module.exports = router