// Javascript is asynchronous so..
console.log("line 1");
console.log("line 2");

setTimeout(() => {
    console.log("timeout line");
}, 2000);

console.log("line 4");

// Here the line 4 will be printed just after line 2 and the timeout line will 
// wait for 2 secs. to be printed

console.log("line 5");

setTimeout(() => {
    console.log("line 6");
}, 0);

console.log("line 7");

const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Bhupesh");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// When we use multiple callbacks inside of callbacks and callbacks and so on..
// It's call pyramid of loop or Callback Hell
// So we use Promises for that

// Promises
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("Error! The Random Number was less then 0.5");
    } else {
        setTimeout(() => {
            console.log("I'm Done");
            resolve("Function Run Successfully");
        }, 3000);
    }
});

prom1.then((a) => {
    console.log(a)
}).catch((err)=> {
    console.log(err);
});

let prom2 = new Promise((resolve, reject)=> {
    console.log("This is Promise 2");
    resolve("Prom2 ran successfully");
});

prom2.then((a)=> {
    console.log(a);
}).catch((err)=> {
    console.log(err);
});

let prom3 = Promise.all([prom1, prom2]);
prom3.then((a)=> {
    console.log(a);
}).catch((err)=>{
    console.log(err);
});

let prom4 = Promise.allSettled([prom1, prom2]);
prom4.then((a)=>{
    console.log(a);
}).catch((err) => {
    console.log(err);
});

let prom5 = Promise.race([prom1, prom2]);
prom5.then((a)=>{
    console.log(a);
}).catch((err) => {
    console.log(err);
});


let prom6 = Promise.any([prom1, prom2]);
prom6.then((a)=>{
    console.log(a);
}).catch((err) => {
    console.log(err);
});
