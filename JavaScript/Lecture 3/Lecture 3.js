// Loops in Javascript
// For Loop
for (let i = 1; i <= 5; i++) {
  console.log("Hello World!");
}

console.log("Loop has ended!");

for (let j = 1; j <= 10; j++) {
  console.log(j);
}

console.log("Loop has ended!");

for (let k = 10; k >= 1; k--) {
  console.log(k);
}

console.log("Loop has ended!");

let sum = prompt("Enter a letter: ");
for (let n = 0; n <= 10; n++) {
  let add = sum + n;
  console.log(add);
}

// While loop
let i = 1;
while (i <= 5) {
  console.log("Hello World");
  i++;
}

console.log("while loop ended");

let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

console.log("while loop ended");

// Do While Loop
let I = 1;
do {
  console.log("Hello World");
  I++;
} while (I <= 5);

console.log("do while loop ended");

let J = 20;
do {
  console.log("Hello World");
  J++;
} while (j <= 10);

console.log("do while loop ended");

// For-Of Loop  || It is used to get all charectors from a string
let str = "Bhupesh";
for (let i of str) {      // i for iterator
  console.log(i);
}

console.log("For of loop end");

let length = 0;
let word = "JavaScript";
for (let i of word) {
  console.log(i);
  length++;
}
console.log("JavaScritp has", length, "letters");

// For-In Loop  || It is used to get all the keys from an object
let Student = {
  name: "Rahul Sarkar",
  class: 12,
  percentage: 87,
  isPass: true
};

for (let i in Student){
  console.log(i,":", Student[i]);
}