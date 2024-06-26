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

// Arrays Methods in JavaScript
// These methods do changes to the original arrays
// Push(): add to end
// Pop(): delete from end & return
// Unshift(): add a new item in the start of the array
// Shift(): deletes one element in the start of the array
// Splice()

// These methods do changes and make it a new array
// toString(): converts array to string
// Concat(): joins multiple arrays & return results
// Slice()


// array.push()
let foodItems = ["potato", "tomato", "grapes", "mango", "burger"];
console.log(foodItems);
foodItems.push("lays");     // Adds lays to the array "foodItems"
console.log(foodItems);

// array.pop()
let deletedItem = foodItems.pop(); // It deletes one element from the last of the array
console.log(foodItems);
console.log("Deleted", deletedItem);

// toString()
let foodString = foodItems.toString(); // Converts the array to the string
console.log(foodString);

let marvelHeros = ["IronMan", "SpiderMan", "Thor", "CaptainAmerica"];
let dcHeros = ["SuperMan", "Batman", "WonderWoman"];
let indianHeros = ["Krish", "Shaktiman"];
let Heroes = marvelHeros.concat(dcHeros, indianHeros); // Combines all the given arrays
console.log(marvelHeros);
console.log(dcHeros);
console.log(indianHeros);
console.log(Heroes);

// unshift()
marvelHeros.unshift("Hulk"); // Adds Hulk in the start of the array
console.log(marvelHeros);

// shift()
let removed = marvelHeros.shift() // Deletes one element in the start of the array
console.log(marvelHeros);
console.log("Removed", removed);

// Slice()
console.log(marvelHeros.slice(0,1)); // Takes a part of array from index 0 to 1 but 1 is not inclusive

// Splice()
let num = [1, 2, 3, 4, 5, 6, 7];
console.log(num);
num.splice(1, 2, 101, 102); // Splice can delete, add and replace itmes in an array
console.log(num);           // arrat.splice(startIdx, delCount, newElement)

// Add Element
num.splice(3, 0, 420);
console.log(num);

// Delete Element
num.splice(5, 1);
console.log(num);

// Replace Element
num.splice(4, 1, 1307);
console.log(num);