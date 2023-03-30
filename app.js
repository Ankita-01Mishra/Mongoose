const express=require('express')
const bodyParser = require('body-parser')
const studentRouter=require("./routes/student")
const connect=require("./database/mongoose")
const app=express()

app.use(bodyParser.json())
app.use(studentRouter);

app.listen(6001,async()=>{
    console.log('server is running on port no 6000')
    await connect()
})