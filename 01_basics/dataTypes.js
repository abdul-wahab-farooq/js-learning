// 1- Declare a variable name and assign your full name as a string.
let name = "Abdul Wahab Farooq";

console.log(name);

// 2- Declare a variable age and assign your age as a number.

// let age = 19;
// console.log(age);

// 3- Declare a variable isStudent and assign true if you are a student.

let isStudent = true;

console.log(isStudent);

// 4- Create a variable undefinedVar without assigning a value. What is its type?

let undefinedVar;

console.log(typeof undefinedVar);

// 4- Create a variable nullVar and assign it null. What is its type?

let nullVar = null;

console.log(typeof nullVar);

// 5- Write a program that logs the type of "Hello World" using typeof.

console.log(typeof "Hello World");

// 6- Write a program that logs the type of 42 using typeof.

console.log(typeof 42);

// 7- Write a program that logs the type of false using typeof.

console.log(typeof false);

// 8- Create a variable bigNumber using BigInt. Assign 123456789012345678901234567890n.

let bigNumber = "123456789012345678901234567890n";
console.log(bigNumber);

// 9- Create a variable symbolVar using Symbol("id"). Log its type.
let symbolVar = Symbol("id");
console.log(typeof symbolVar);

// 10- What is the output of typeof NaN? Try it in code.

console.log(typeof NaN);

// 11- Convert the string "123" into a number and log the result.

let str = "123";
let str1 = Number("123");
console.log(str1);

// 12- Convert the number 456 into a string and log the result.

let num = 456;
let num2 = String(456);
console.log(num2);

// 13- Create a Boolean variable isAdult by comparing age >= 18. Log the variable.

let age = 15;
let isAdult;

if (age >= 18) {
    isAdult = true;
} else {
    isAdult = false;
}
console.log(isAdult);

// 14- Create a variable greeting using template literals to include your name.

let greetings = `Assalam u Alaikum! My name is ${name}!`;
console.log(greetings);
