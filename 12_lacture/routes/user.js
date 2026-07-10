const express=require("express");
const router=express.Router();
const userController=require("../controller/usercontroller.js");
router.get('/',userController.getuser);
router.get('/profile',userController.getprofile);
router.get('/settings',userController.getsettings);

module.exports=router;