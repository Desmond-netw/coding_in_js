// Task: Check if number is Even or Odd
// User enter a number , and print wether the number is even or odd

const input = require("prompt-sync")();

let number = parseInt(input("Enter any Number: "));

// check number
if (number % 2 === 0 ) {
    console.log("The number", number , "is even");
}
else {
    console.log( number , " is  old number");
}