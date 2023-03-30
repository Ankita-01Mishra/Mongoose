const mongoose = require("mongoose");

const informationSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    email:String,
    mobile:String,
})

const Information=mongoose.model("information",informationSchema)

module.exports={Information};