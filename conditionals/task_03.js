const input = require ("prompt-sync")();
// Password Validation
let password;
let max = 8;
password = input("Enter Password: ")

//check password length

if (password.length < max) {
    console.log("Password is too short!");
}
else if (password.length > max){
    console.log(password, "is verified");
}
else{
    console.log("try again");
}