function startD(callback) {
    console.log("Download Started...");

    setTimeout(() => {
        callback();
    }, 3000);
}

function dload(cb) {
    console.log("Downloading...");

    setTimeout(() => {
        cb();
    }, 2000);
}

function downlCompleted() {
    console.log("Download Completed!");
}
startD(() => {
    dload(() => {
        downlCompleted();
    });
});