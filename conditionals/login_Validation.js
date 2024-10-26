const input = require("prompt-sync")();
//Task: Login Validation
//A program that ask user for username and password
// check the username "admin" and " password123"

const username = "admin";
const password = "password123"

let urs = input("Enter username: ");
let pwd = input("Enter password: ");

if( urs === username && pwd === password) {
    console.log("Login successful");
}
else {
    console.log("Invalid User");
}