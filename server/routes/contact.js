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

router.post("/", auth, 
    body('name').not().isEmpty(),
    body('email').isEmail(),

    async (req,res)=> {
        
            const errors = validationResult(req)
            if (!errors.isEmpty()){
            return res.status(400).json({err: errors.array()})
            }
        const {name, email, phone, photo, address, favourite} = req.body
        try{
            const newContact = new Contact({
                name,
                email,
                phone,
                photo,
                address,
                favourite,
            })
            const contact = await newContact.save()
            res.json(contact)
        }
        catch(err){
            console.error(err.message)
            res.status(501).json({msg: "Server Failed !"})
        }
    })

router.put("/:id", (req,res)=> {
    res.send("Update Contacts !")
})

router.delete("/:id", (req,res)=> {
    res.send("Delete Contacts !")
})

module.exports = router