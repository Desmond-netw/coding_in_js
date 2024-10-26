const input = require('prompt-sync')();



// Description: Ask the user to input two numbers and compare them.
// Print whether the first number is greater than, less than, or equal to the second number.
console.log(" You can compare two numbers")
let numb1 = parseInt(input(" Enter first number: "));
let numb2 = parseInt(input("Enter second number: "));

if (numb1 > numb2) {
    console.log (numb1, "is greater than", numb2);
} 
else {
    console.log(numb2, "is greater than", numb1);
}