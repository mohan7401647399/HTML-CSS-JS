const div = document.querySelector("div");

// body.document.append(div);


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (getRandom()) {
            resolve("resolved")
        } else {
            reject("rejected")
        }
    }, 1000);
});


// function getRandom() {
//     return Math.random() < .5
// }

async function getRandom() {
    return Math.random() < .5
}

promise.then((message) => {
    console.log(`The message is ${message}`);
    div.innerHTML = `<h1>The message is ${message}</h1>`;
}).catch((message) => {
    console.log(`The error message is ${message}`);
    div.innerHTML = `<h1>The error message is ${message}</h1>`;
})

const message = await promise;
console.log(message);