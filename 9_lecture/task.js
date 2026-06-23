// function startD(callback) {
//     console.log("Download Started...");

//     setTimeout(() => {
//         callback();
//     }, 3000);
// }
// startD(()=>{

// });

// function dload(cb) {
//     console.log("Downloading...");

//     setTimeout(() => {
//         cb();
//     }, 2000);
// }
// dload(() => {

// });

// function downlCompleted() {
//     console.log("Download Completed!");
// }downlCompleted();


//Downloading a File

function startDownload(callback) {
    console.log("Start Downlading");
    setTimeout(() => {
        console.log("Downloading completed");
        callback();
    }, 3000);
}
startDownload(() => {
    console.log("Opening File.......")
});

//user Authentication

function user(callback) {
    setTimeout(() => {
        console.log("Verify User");
        callback();
    }, 2000);
}
function profile(callback) {
    setTimeout(() => {
        console.log("fetch user profile")
        callback();
    })
}
user(() => {
    profile(() => {
        console.log("Display profile");
    });

});


//Food Delivery Process


function placed(callback) {
    setTimeout(() => {
        console.log("Order placed");
        callback();
    });
}
function prepared(callback) {
    setTimeout(() => {
        console.log("Food prepared");
        callback();
    });
}
function delivered(callback) {
    setTimeout(() => {
        console.log("Food delivered");
        callback();
    });
}

placed(() => {
    prepared(() => {
        delivered(() => {
            console.log("Enjoy !");
        });
    });
});



//callback hell

function download(calllback) {
    setTimeout(() => {
        console.log("Download Complete");
        calllback();
    }, 1000);
}
function compress(calllback) {
    setTimeout(() => {
        console.log("Compression Complete");
        calllback();
    }, 1000);
}
function upload(calllback) {
    setTimeout(() => {
        console.log("Upload Complete");
        calllback();
    }, 1000);
}
console.log("Start Download");
download(() => {
    console.log("Compressing File");
    compress(() => {
        console.log("Uploading File");
        upload(() => {
            console.log("Process Finished");
        });
    });
});

// download file using promise

function downloadFile() {
    return new Promise((res) => {
        console.log("Starting download...");
        setTimeout(() => {
            res("Download completed");
        }, 2000);
    });
}
downloadFile()
    .then(result => {
        console.log(result);
    });


//Check even or odd number

function checkEven(num) {
    return new Promise((res, rej) => {
        if (num % 2 === 0)
            res("Even Number");
        else
            rej("Odd Number");
    });
}
checkEven(8)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


//ATM Withdrawal

function withdraw(balance, amount) {
    return new Promise((res, rej) => {
        if (balance >= amount)
            res("Withdrawal Successful");
        else
            rej("Insufficient Balance");
    });
}
withdraw(5000, 2000)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));



//promise chaining 

function down() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Download");
            res();
        }, 2000);
    });
}
function com() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("compress");
            res();
        }, 2000);
    });
}

function upload() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Uploaded");
            res();
        }, 2000);
    });
}
down()
    .then(() => com())
    .then(() => upload())
    .then(() => console.log("All task completed"));



// promise all

const api1 = Promise.resolve("User Data");
const api2 = Promise.resolve("Orders Data");
const api3 = Promise.resolve("Payment Data");
Promise.all([api1, api2, api3])
    .then(results => {
        console.log(results);
     });

     //SetTimeout

function startD(callback) {
    console.log("Download Started...");

    setTimeout(() => {
        callback();
    }, 3000);
}
startD(()=>{

});





function login(callback) {
    console.log("Login Success");
    setTimeout(() => {
        callback();
    }, 3000);
}

function profile(callback) {
    console.log("Profile Loaded");
    setTimeout(() => {
        callback();
    }, 3000);
}

function posts() {
    console.log("Posts Loaded");
    setTimeout(() => {
        callback();
    }, 3000);
}

login(() => {
    profile(() => {
        posts();
    });
});




login(() => {
    profile(() => {
        posts();
    });
});


function red(){
    return new Promise(res=>{
        setTimeout(()=>{
        console.log("Red");
        res();

    },3000);
    });
}
function Yellow(){
    return new Promise(res=>{
        setTimeout(()=>{
        console.log("Yellow");
        res();

    },3000);
    });
}
function Green(){
    return new Promise(res=>{
        setTimeout(()=>{
        console.log("Green");
        res();

    },3000);
    });
}
red()
.then(()=>Yellow())
.then(()=>Green());

