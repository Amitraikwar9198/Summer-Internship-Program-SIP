const express=require("express");
const bcrypt=require("bcrypt");
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
let users=[];
app.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    const hash=await bcrypt.hash(password,5);
    setTimeout(()=>{
        users.push({
        name,
        email,
        password:hash
        });
        console.log(users);
    },5000);
    res.send("user registered");
})
app.listen(3000);