// function happyBirthday(name, age) {
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday dear ${name} !`);
//     console.log("Happy Birthday to you!");
//     console.log(`You are now ${age} years old!`);
// }

// happyBirthday("John", 30);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function isEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}

let addnum = add (5, 10);
let subnum = subtract(4, 3);
let num = evenOrOdd(7);
let emailCheck = isEmail("debjganguly@gmail.com");

console.log(addnum);
console.log(subnum);
console.log(num);
console.log(emailCheck);