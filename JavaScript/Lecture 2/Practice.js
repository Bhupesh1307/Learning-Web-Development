/* 
Q1.> Get user to input a number using prompt("Enter a number:").
     Check if the number is a multiple of 5 or not. 
*/
const num = prompt("Enter a nummber:");
if (num % 5 === 0) {
    console.log(num, "is a multiple of 5");
}   else {
    console.log(num, "is not a multiple of 5")
}

/*
Q2.> Write a code which can gice grades to students according to their scores:
    -   80-100, A
    -   70-79, B
    -   60, 69, C
    -   50-59, D
    -   0-49, F
*/
const marks = prompt("Enter your Marks:");
let grade;
if (marks >=80 && marks <= 100) {
    grade = "A";
}   else if (marks >= 70 && marks <= 79)    {
    grade = "B";
}   else if (marks >= 60 && marks <= 69)    {
    grade = "C";
}   else if (marks >= 50 && marks <= 59)    {
    grade = "D"
}   else if (marks >= 0 && marks <= 49) {
    grade = "F"
}   else {
    alert("Invalid Input! Try again!");
}
console.log("Your Grades: ",grade);
if (grade != "F") {
    console.log("Congratulations! You have passed!");
}   else if (grade = "F")   {
    console.log("Sorry, you have failed! Better Luck next time!")
}