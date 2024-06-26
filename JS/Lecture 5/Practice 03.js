/*
    Q.1> We are given array of marks of students. Filter out of the marks of students that scored 90+.
*/
const marks = [97, 64, 32, 49, 99, 96, 86];
const topMarks = marks.filter((val) => {
    return val >+ 90;
});
console.log(topMarks);

/*
    Q.2> Take a number n as input from user. Create an array of numbers from 1 to n.
         Use the reduce method to calculate sum of all numbers in the array.
         Use the reduce method to calculate product of all numbers in the array.
*/
const n = prompt("Please enter a number: ");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
// Calculating the sum
const sum = arr.reduce((pre, curr) => {
    return pre + curr;
});
console.log(sum);

// Calculatiing the product
const prod = arr.reduce((pre, curr) => {
    return pre * curr;
});
console.log(prod);