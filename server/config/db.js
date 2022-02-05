const mongoose = require ("mongoose")
const config = require("config")

const db = config.get("mongoURI")
const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParse: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })

    .then(() => console.log("MongoDb Connected"))
    .catch(err => {
        console.log(err.message)
    })
}



module.exports = connectDB