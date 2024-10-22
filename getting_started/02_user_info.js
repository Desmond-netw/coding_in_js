const input = require ('prompt-sync')();

// take user form
let name = input("Enter your name : ")
let age = input ("What is your age: ")
let email = input ("Email : ")
let course = input("Course: ")

console.log (`Hello ${name} your age is ${age} and your email address is ${email} thank you for choosing ${course} course.`)