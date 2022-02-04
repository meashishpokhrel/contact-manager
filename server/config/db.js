const mongoose = require ("mongoose")

const DBConnection = async() => {
    return mongoose.connect("mongodb://localhost/contact-manager").then(()=>{
        console.log("Database cnnection")
    })
}

module.exports = DBConnection