const jwt = require ("jsonwebtoken")
const config = require("config")

module.exports = function (req, res, next){
    // Here we are taking token from Header

    const token = req.header("x-auth-token")

    if (!token){
        return res.status(401).json({ msg: "No token, authorization Failed !"})
    }

    try{
        const decrypted = jwt.verify(token, config.get("jwtKey"))

        req.user = decrypted.user
        next()
    }
    catch(err){
        res.status(401).json({msg: "Token in Invalid !"})
    }

}