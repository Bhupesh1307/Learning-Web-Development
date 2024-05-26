/*
    Q.1> Create a function using "function" keyword that takes a String as an argument &
    returns the number of vowels in the string.
*/
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    console.log(count);
}

countVowels("Bhupesh");

/*
    Q.2> Create an arrow function to perform the same task.
*/
const vowels = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    console.log(count);
}

vowels("icecream");