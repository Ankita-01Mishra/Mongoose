const mongoose=require("mongoose")
// const url="mongodb://127.0.0.1:27017/student"

const url="mongodb+srv://ankitamishra:ankitadb26@cluster0.uwnnay3.mongodb.net/student?retryWrites=true&w=majority"

const connect=async()=>{
    try{
    console.log("Connected to mongodb....");
    const dbConn=await mongoose.connect(url)
    console.log("Connected => ");
    }catch(error){
        console.log(error);
    }
}

module.exports=connect;