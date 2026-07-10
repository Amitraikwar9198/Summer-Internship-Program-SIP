let student=[{
    id:1,
    name:"Amit",
    age:21
}]
exports.getuser=(req,res)=>{
    res.json(student);
}
exports.getprofile=(req,res)=>{
    res.send("All profile");
}
exports.getsettings=(req,res)=>{
    res.send("All Settings");
}