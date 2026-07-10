const express=require("express");
const app=express();
app.post('/addstudents',(req,res)=>{
    res.send("All Students");
})

app.get('/students',(req,res)=>{
    res.send("Saare students aa gaye hai");
})

app.put("/students/:id",(req,res)=>{
res.send("Student Updated");
});

app.listen(5000);