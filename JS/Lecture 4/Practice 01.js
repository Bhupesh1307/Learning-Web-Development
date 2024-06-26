/*
    Q.1> For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
    Find the average marks of the entire class.
*/

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marks) {
    sum += val;
};
console.log(`Average Marks of the class is ${sum/marks.length}`);

/*
    Q.2> For a given Array with prices of 5 items -> [250, 645, 300, 900, 50]
    All items have an offer of 10% OFF on them. Change the array to store final price
    after applying offer.
*/

let items = [250, 645, 300, 900, 50];
let i = 0;
console.log("These are the original prices of your items", items);
console.log("You got 10% Discount on all your items!");
for (let val of items) {
    console.log(`Price before discount is ${val}`);
    let offer = items[i] - (items[i] / 10);
    console.log(`Price after discount is ${offer}`);
    i++;
}