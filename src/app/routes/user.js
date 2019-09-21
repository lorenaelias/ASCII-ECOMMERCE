const express = require("express")

const user = express.Router()

user.get("/getname",(req,res)=> res.send("nome"))

module.exports = user