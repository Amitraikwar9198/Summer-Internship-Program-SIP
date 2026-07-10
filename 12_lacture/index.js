const express=require("express");
const app=express();
const userRoute=require('./routes/user.js');
app.use('/users',userRoute);
app.listen(3000);