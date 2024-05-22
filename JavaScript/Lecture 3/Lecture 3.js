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
for (let i of str) {
  // i for iterator
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
  isPass: true,
};

for (let i in Student) {
  console.log(i, ":", Student[i]);
}

// Strings in JavaScript
let str1 = "Hello World";
let str2 = "Bhupesh";

// String Length
console.log(str1, "has", str1.length, "letters");
console.log(str2, "has", str2.length, "letters");

// String Indices
console.log("Bhupesh's 4th charector is", str2[3]);
console.log(
  "Hello World has",
  str1[0],
  str1[1],
  str1[2],
  str1[3],
  str1[4],
  str1[5],
  str1[6],
  str1[7],
  str1[8],
  str1[9],
  str1[10],
  "letters"
);

// Template Literals  || Template Literals are special type of strings in JavaScript
let specialString = `This is a Template Literal`;
console.log(specialString);
console.log(typeof specialString);

// Use of Template Literals in JavaScript
let obj = {
  item: "pen",
  price: 10,
};

console.log("The cost of", obj.item, "is", obj.price, "rupees!");
console.log(`The cost of ${obj.item} is ${obj.price} rupees`); // The Template Literals are used to do this type of tasks so easily!
// We can also do it like this:
let info = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(info);
/* IMP: This thing "${expression}" is called a placeholder. In the Template Literals we embade these placeholders.
   This process of embading a placeholder in a Template Literal is called "String Interpolation".
*/
// We can also do this:
console.log(`${1 + 2 + 3}`);


// Escape Charecters in JavaScript

console.log("Bhupesh \n \tChaubey"); // The Escapte Charecters take 1 count in string.