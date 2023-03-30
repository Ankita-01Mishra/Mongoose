const {Information}=require("../models/student")

const studentEnrollment=async(req,res)=>{
    const studentData=req.body;
    try{
        const information = new Information({
            firstName:studentData.firstName,
            lastName:studentData.lastName,
            age:studentData.age,
            email:studentData.email,
            mobile:studentData.mobile
        })
       const dbResponse= await information.save()
       console.log(dbResponse);
       return res.status(200).send({message:"Student info is saved"})
    }catch(error){
        console.log(error);
        return res.status(500).send({message:"Error while operating on db"})
    }
}
const getData = async (req,res)=>{
    const info = req.query
   const result= await Information.find(info)
   return res.send({message:result})  
}
const deleteData = async (req,res)=>{
   const info = req.query;
   const result = await Information.deleteOne(info);
   return res.send ({message:result})
}

const updateData = async (req,res)=>{
   info = req.body
   filter = info.filter
   value = {$set:info.value}

   const result = await Information.updateOne(filter, value);
   return res.send ({message:result})
}

module.exports={
    studentEnrollment,getData,deleteData,updateData
}