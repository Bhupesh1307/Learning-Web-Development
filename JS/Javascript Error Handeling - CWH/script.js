let a = prompt("Enter first number: ");
let b = prompt("Enter sencond number: ");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed!");
}

let sum = parseInt(a) + parseInt(b);

let x = 1;

function main() {
  try {
    console.log(`The sum is ${sum * x}`);
    return true;
  } catch (error) {
    console.log("Error aa gaya bhaii ;(");
    return false;
  } finally {
    console.log("Files are being closed and db is being closed");
  }
}

main();









