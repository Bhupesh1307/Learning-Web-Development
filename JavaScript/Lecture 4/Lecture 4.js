// Arrays in JavaScript
let marks = [97, 87, 75, 68, 52];
console.log(marks);

let superHeros = ["IronMan", "Captain America", "Thor"];
console.log(superHeros);
console.log(superHeros.length); // Array.length is a property of Array
console.log(typeof marks);      // Array is an Object with index instead of keys in JavaScript

// Array Indices
console.log(marks[0]);          // We can get a specific element in an Array on their index number like this
console.log(marks[1]);
console.log(marks[2]);  

console.log(marks[99]);         // This will show undefined as we don't have any thing at this index

marks[3] = 69;                  // We can also change anything at a specific index in an Array
console.log(marks);             // It can not be donw in a String as the Strings are Immutable in JavaScript

// Looping on Arrays
for (let i = 0; i < 3; i++) {   // i for iterables
    console.log(superHeros[i]);
};

let j = 0;
while (j < marks.length) {
    console.log(marks[j]);
    j++;
};

for (let items of superHeros){
    console.log(items);
}