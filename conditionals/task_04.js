const input = require ("prompt-sync")()
//Task: Age Check
// Description: Ask the user to enter their age, then check if the user is 
// old enough to vote (18 or older). Print a message telling the user if they can vote or not

let age = parseInt(input("Enter your age: "));

if (age <=16){
    console.log("You are not old enough to vote ");
} 
else {
    console.log("You are old enough to vote");
}