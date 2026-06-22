const promise = new Promise((res, rej)=>{
    let s=false; //true
    if(s){
        res("fulfilled");
    }
    else{
        rej("password errors");
    }
});
promise.then(result=>{
    console.log(result);
})
.catch(error=>{
console.log(error);
})
.finally(()=>{
    console.log("completed");
})