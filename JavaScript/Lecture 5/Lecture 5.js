// Functions in JavaScript
function helloWorld(){              // Defining Function
    console.log("Hello World");
}

helloWorld();                       // Calling Function

function  myFunction(msg){          // parameter -> input
    console.log(msg);
}

myFunction("Hello :)");
myFunction("I Love JavaScript");

function add(a, b){                 // Takes two numbers as input and adds them
    console.log(a + b);
}

add(2, 3);

// Return keyword in JavaScript Functions

function multiply(x, y){
    val = x * y;
    return val;
}

multiply(2, 3);
console.log(val);

function plus(x, y){
    sum = x + y;
    return sum;
}

let addition = plus(5, 3);
console.log(addition);

function func(a, b){
    sub = a - b;
    return sub;
    console.log("Hello World");       // Any code after return in a function will never be executed
}

// Arrow Functions
// Arrow Function is a compact way of writing a function
// Arrow Function is actully a variable which behaves like a function
// Arrow Functions are a part of modern JavaScript
// Arrow Fuction is just a variable which contains a function in itself

const arrowSum = (a, b) => {
    console.log(a + b);
}

arrowSum(5, 2);

const str = () => {
    console.log("Hello World");
}

str();

const print = (x) => {
    console.log(x);
}

print("Hello World");

// forEach Loop in JavaScript
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
})

let arr1 = ["a", "b", "c"];
arr1.forEach((val, idx, arr1) => {
    console.log(idx + 1, val.toUpperCase(), arr1);
})
// forEach is a Higher Order Fuction/Method
// Higher Order Function or Methods are functions or Methods which can take other function as a parameter