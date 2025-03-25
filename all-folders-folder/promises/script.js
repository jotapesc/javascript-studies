let promises = new Promise((resolve, reject) => {
    let value = 1 + 1;
    if (value === 2) {
        resolve("Success");
    }
    else {
        reject("Failed");
    }
});

promises.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})