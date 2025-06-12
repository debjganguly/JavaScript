let numbers = [1, 2, 3, 4, 5];
console.log(...numbers);

let max = Math.max(...numbers);
console.log(max);

let min = Math.min(...numbers);
console.log(min);

let username = "Debjyoti";
let letters = [...username].join("-");
console.log(letters);

let fruits = ["Apple", "Banana", "Cherry"];
let veggies = ["Carrot", "Broccoli", "Spinach"];
let foods = [...fruits, ...veggies];
console.log(...foods.join(","));