const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home")
})

app.post("/add",(req,res)=>{
    res.send("Welcome to add page")
})

app.post("/view",(req,res)=>{
    res.send("welcome to view page")
})

app.listen(8080,()=>{
    console.log("server started")
})
