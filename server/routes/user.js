const express = require("express")

const router = express.Router()
const { body, validationResult } = require('express-validator');

const User = require("../models/User")
// api/signup
//Registering a User
router.post("/", 
body('email').isEmail(),
body('password').isLength({ min: 5 }),
(req,res)=> {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({err: errors.array()})
    }
   res.send("Coorect")
})

module.exports = router