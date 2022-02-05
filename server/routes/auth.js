const express = require("express")
const bcrypt = require("bcryptjs")
const jwt =require("jsonwebtoken")
const config = require ("config")
const { body, validationResult, check } = require('express-validator');
const User = require("../models/User");

const router = express.Router()



// api/signin
//Getting logged in  User
router.get("/", (req,res)=> {
    res.send("Logged in User !")
})


//Authenticating user and getting the token
router.post("/",
body('email').isEmail(),
body('password').exists(),
 async (req,res)=> {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({err: errors.array()})
    }

    const {email, password} = req.body

    try{
        let user = await User.findOne({email})

        if (!user){
            return res.status(400).json({msg: "Invalid Credentials !"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch){
            return res.status(400).json({msg: "Invalid Credentials ! "})
        }
        const payload = {
            user:{
                id: user.id
            }
        }
    
        //TO Generate a token and also expiring it in some time
        jwt.sign(payload, config.get("jwtKey"),{
            expiresIn: 360000
        },(err, token) => {
            if (err) throw err
            res.json({token})
        })
    
    }
    catch{
        console.error(err.message)
        res.status(500).send("server error !")
    }
    
})






module.exports = router