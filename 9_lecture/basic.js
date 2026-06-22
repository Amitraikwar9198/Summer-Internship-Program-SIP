let count = 0;
// const maxRuns=4;
const intervalID=setInterval(()=>{
    console.log("execution");
    count++;
    if(count >=5){
        clearInterval(intervalID);
    }
}, 1000);