const express = require("express")

const router = express.Router()

// api/contacts
//Getting all users contacts
router.get("/", (req,res)=> {
    res.send("Get all Contacts !")
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