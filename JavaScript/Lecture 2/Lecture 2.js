// Comments in JavaScript

// This is a Single Line Comment
/* This
        is
            a
                Multiline
                            Comment*/

// Operators in JavaScript

// Arithmatic Operators
let a = 5;
let b = 2;
console.log("5 + 2 =", a + b);
console.log("5 - 2 =", a - b);
console.log("5 * 2 =", a * b);
console.log("5 / 2 =", a / b);

console.log("5 % 2 =", 5 % 2); // Modulas Operator
console.log("5^2 =", 5 ** 2); // Exponential Operator

// Unary Operators
let x = 9;
let y = 6;
x++;            // Increment Operators (x + 1)
console.log(x); 
y--;            // Decrement Operators (y - 1)
console.log(y);

console.log(++x);   /* It can be also used as ++x(Pre Increment) and --y(Pre Decrement)
                        x++ is called Post Increment and y-- is Post Decrement
                    */

console.log(x++);   // If you use post increment for this line it will print first then add 1 to it
console.log(x);     // Now it will print x++