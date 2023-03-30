const express=require('express')
const studentController=require("../controllers/student")
const router=express.Router();

router.post('/student',studentController.studentEnrollment)
router.get("/student",studentController.getData)
router.put("/student",studentController.updateData)
router.delete("/student",studentController.deleteData)

module.exports=router;