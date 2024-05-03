// Comments in JavaScript

// This is a Single Line Comment
/* This
        is
            a
                Multiline
                            Comment*/

// Operators in JavaScript

// Arithmatic Operators
/* There are multiple Arithmatic Operators in Java Script:
+   Addition
-   Subtraction
*   Multiplication
/   Divide
%   Modulas (Will give you the Remainder of Division)
**  Exponential (a^x)
*/
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
x++; // Increment Operators (x + 1)
console.log(x);
y--; // Decrement Operators (y - 1)
console.log(y);

console.log(
  ++x
); /* It can be also used as ++x(Pre Increment) and --y(Pre Decrement)
                        x++ is called Post Increment and y-- is Post Decrement
                    */

console.log(x++); // If you use post increment for this line it will print first then add 1 to it
console.log(x); // Now it will print x++

// Comparison Operators
/* There are so many Comparison Operators in Javascript:
==      Equality Operator (Compare two things if they are equal)
!=      Inequality Operator (Compares two things if they are not equal)
===     Strict Equality Operator (Compares if two things are equal while having the same datatypes)
!==     Strict Inequality Operator (Compares if two things are not equal while having different datatypes)
<       Less than
>       Greater than
<=      Less than equal to
>=      Greater than equal to
*/

let p = 5;
let q = 2;

console.log("5 = 2 is", p == q);
console.log("5 = 5 is", p == p);
console.log("5 != 2", p != q);

/* If we compare a Number with a Sring in Javascript it converts the String
 in the number(if the string contains only a number) and then compares them.*/

let str = "5";
console.log("5 = 5", p == str);

/* In case if you don't want your Number to be compared to a String you can use '==='
 if the data types are not the same which you are compairing it will output false*/
console.log("5 = 5", p === str);

/* We have an opposite operator of this in Javascript which compares if the datatypes are not
 the same and give true in output if they are not same*/
console.log("5 != 5", p !== str);

let big = 10;
let small = 5;
console.log("10 > 5", big > small);
console.log("10 >= 5", big >= small);
console.log("5 < 10", small < big);
console.log("5 <= 10", small <= big);

// Logical Operators
/* There are different types of Logical Operators in Javascript:
&&  Logical And (Gives true if two conditions are true)
||  Logical Or  (Gives true if one of two conditions are true)
!   Logical Not (Reverses the Output, if True gives False and if False gives True)
*/

let A = 5;
let B = 6;
cond1 = A < B;
cond2 = A === 5;
// Logical And (&&)
console.log("cond1 && cond2 are", cond1 && cond2);
console.log("cond1 && cond2 are", A == B && A === 5);

// Logical Or (||)
console.log("cond1 || cond2 are", cond1 || cond2);
console.log("cond1 || cond2 are", A == B || A === 5);
console.log("cond1 || cond2 are", A == B || A === "str");

// Logical Not (!)
console.log("cond1 ! cond2 are", !(cond1, cond2));
console.log("cond1 ! cond2 are", !(A == B));
console.log("cond1 ! cond2 are", !(A === "str"));
console.log("cond1 ! cond2 are", !(A === B));

// Conditional Statements

// If and Else Statement
// Age limit example
let age = 25;
if (age >= 18) {
  console.log("You can Vote!")
} else {
  console.log("You can not Vote!")
}

// Color theme example
let mode = "Dark";
let color;
if (mode === "Dark") {
  color = "Black"
} else {
  color = "White"
}

console.log("Color:", color);

// Even or Odd Number Example
let num = 2;
if (num % 2 === 0) {
  console.log(num, "is an even number");
} else {
  console.log(num, "is an odd number");
}

// If, If-Else and Else Statements
let Age = 5;
if (Age < 12) {
  console.log("You are a kid");
}

else if (Age >= 12 && Age < 18) {
  console.log("You are a teen");
}

else if (Age >= 18 && Age < 30) console.log("You are an Adult"); // We can also write this statements like this
                                                                 // But this is not the profesional way to write if else statements!

else {
  console.log("You are a Senior Citizen");
}