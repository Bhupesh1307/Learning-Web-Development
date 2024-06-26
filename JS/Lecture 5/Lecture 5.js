// Functions in JavaScript
function helloWorld() {
  // Defining Function
  console.log("Hello World");
}

helloWorld(); // Calling Function

function myFunction(msg) {
  // parameter -> input
  console.log(msg);
}

myFunction("Hello :)");
myFunction("I Love JavaScript");

function add(a, b) {
  // Takes two numbers as input and adds them
  console.log(a + b);
}

add(2, 3);

// Return keyword in JavaScript Functions

function multiply(x, y) {
  val = x * y;
  return val;
}

multiply(2, 3);
console.log(val);

function plus(x, y) {
  sum = x + y;
  return sum;
}

let addition = plus(5, 3);
console.log(addition);

function func(a, b) {
  sub = a - b;
  return sub;
  console.log("Hello World"); // Any code after return in a function will never be executed
}

// Arrow Functions
// Arrow Function is a compact way of writing a function
// Arrow Function is actully a variable which behaves like a function
// Arrow Functions are a part of modern JavaScript
// Arrow Fuction is just a variable which contains a function in itself

const arrowSum = (a, b) => {
  console.log(a + b);
};

arrowSum(5, 2);

const str = () => {
  console.log("Hello World");
};

str();

const print = (x) => {
  console.log(x);
};

print("Hello World");

// forEach Loop in JavaScript
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  console.log(val);
});

let arr1 = ["a", "b", "c"];
arr1.forEach((val, idx, arr1) => {
  console.log(idx + 1, val.toUpperCase(), arr1);
});
// forEach is a Higher Order Fuction/Method
// Higher Order Function or Methods are functions or Methods which can take other function as a parameter

// Map
// Map is just as similer as the forEach Loop but creates a new array
arr.map((val) => {
  console.log(val);
});

newArray = arr.map((val) => {
  return val ** 2;
});

console.log(newArray);

// Filter
// Creates a new array of elements that give true for a condition/filter

// Returns array of even numbers
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("These are some numbers: ", num);
let evenNums = num.filter((val) => {
  return val % 2 === 0;
});
console.log("These are even numbers: ", evenNums);

// Returns array of numbers greater than 3
let newNums = num.filter((val) => {
  return val > 3;
});
console.log("Numbers greater than 3 are ", newNums);

// Reduce

// adds the previous numbes with the current number
const numbers = [1, 2, 3, 4];
const res = numbers.reduce((pre, curr) => {
  return pre + curr;
});
console.log(res);

// retunrs the biggest number
const randNum = [3, 6, 4, 1, 5, 8, 7, 9, 0];
const biggest = randNum.reduce((pre, curr) => {
  return pre > curr ? pre : curr;
});
console.log(biggest);

// Returns smallest number
const smallest = randNum.reduce((pre, curr) => {
  return pre < curr ? pre : curr;
});
console.log(smallest);