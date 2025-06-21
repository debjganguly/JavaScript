// let age = 1;
// age >= 18 ? console.log("You are an adult") : console.log("You are a minor");

// let time = window.prompt("Enter time:");

// time < 12 ? console.log("Good morning!") :
//     time < 18 ? console.log("Good afternoon!") :
//         console.log("Good evening!");

// let isstudent = true;
// let message = isstudent ? "You are a student" : "You are not a student";
// console.log(message);    

let purchase = window.prompt("Enter purchase amount:");
let discount = purchase >= 100 ? 0.1 : 0;
let total = purchase - (purchase * discount);
console.log("Total amount after discount: " + total);