// make routers with express.
const express = require("express");
const Loginrouter = express.Router();
Loginrouter.post("/Login",(req,res)=>{
    res.json({
        message : "loginrouter is working"
    })
})
module.exports = Loginrouter;