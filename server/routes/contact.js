const express = require("express")
const { body, validationResult } = require('express-validator');
const auth = require("../middleware/auth");

const User = require("../models/User")
const Contact = require("../models/Contact")


const router = express.Router()

// api/contacts
//Getting all users contacts
router.get("/",auth, async(req,res)=> {
    try{
        const contacts = await Contact.find ({user: req.user.id})
        res.json(contacts)
    }
    catch(err){
        console.error(err.message)
        res.status(500).json({msg: "Server Error !"})
    }
})

router.post("/", (req,res)=> {
    res.send("Adding Contacts !")
})

router.put("/:id", (req,res)=> {
    res.send("Update Contacts !")
})

router.delete("/:id", (req,res)=> {
    res.send("Delete Contacts !")
})

module.exports = router