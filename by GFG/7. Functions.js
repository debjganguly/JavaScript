// Theory: Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

// 1. Normal Function: 
function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));
//-----------------------------------------------------------------

// 2.  Calling Function
// Function Definition
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to GeeksforGeeks");
}

let nameVal = "User";

// calling the function
console.log(welcomeMsg(nameVal));
//-----------------------------------------------------------------

// 3. Function Expression
const mul = function (x, y) {
    return x * y;
};
console.log(mul(4, 5));
//-----------------------------------------------------------------

// 4. .map (Arrow Function)
const a = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
