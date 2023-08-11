const express = require("express")
const bodyParser = require('body-parser')
const path = require("path")

const app =express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.post("/badhon",(req,res)=>{
    res.send (req.body)
    console.log(req.body);
})


app.listen(4000,"localhost", ()=>{
    console.log("server working");
})