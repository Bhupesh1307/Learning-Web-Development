// Window Object
/*
    The window object represents and open window in a browser. It is a browser's object (not JavaScript's)
    & is automatically created by browser.

    It is a global object with lots of properties & methods.
*/

// DOM Manipulation
// Selecting with ID
const head1 = document.getElementById("head1");
console.log(head1);

// Selecting with Class Name
const heading = document.getElementsByClassName("heading");
console.log(heading);

const loader = document.getElementsByClassName("loader");
console.log(loader);

// Selecting with HTML Tags
const head2 = document.getElementsByTagName("h2");
console.dir(head2);

// Query Selector
// Selecting tags
let para = document.querySelector("p"); // Selects the first <p> tag.
console.dir(para);

let allPara = document.querySelectorAll("p") // Selects all the <p> tag.
console.dir(allPara);                        // Creates a node list of it

// Selcting Id
let btn = document.querySelector("#btn");
console.dir(btn);

// Selecting class
let paragraph = document.querySelectorAll(".exp")
console.dir(paragraph);

// Properties
// tagName
console.log(head1.tagName);     // returns Tag Name
console.log(btn.tagName);

let firstEl = document.querySelector("#head1");
console.log(firstEl.tagName);

let bodyChild = document.querySelector('body');
console.log(bodyChild.children);
console.log(bodyChild.firstChild);
console.log(bodyChild.lastChild);

let fruits = document.querySelector(".fruits");
console.dir(fruits);
console.log(fruits.innerText);
console.log(fruits.innerHTML);
fruits = fruits.innerText = "abc";
console.log(fruits);
fruits = fruits.innerHTML = "<h2>Fruits</h2>";

let heading1 = document.getElementById("heading 1");
console.log(heading1.textContent);