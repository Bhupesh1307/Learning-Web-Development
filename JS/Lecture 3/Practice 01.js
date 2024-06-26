/*
    Q.1> Print all even numbers from 0 to 100.
*/
console.log("Even numbers between 1 to 100")
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("Odd numbers between 1 to 100")
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

/*
    Create a game where you start with any random game number.
    Ask the user to keep guessing the game number until the user enters correct value.
*/
let gameNumber = 25;
let guess = prompt("guess the two digit number: ");
while (guess != gameNumber){
    guess = prompt("Sorry! You guess it wrong. Try again!");
}
alert("Yay! You won the game, by guessing the right number!");