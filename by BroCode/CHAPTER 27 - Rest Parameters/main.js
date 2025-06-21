const food1 = "pizza";
const food2 = "burger";
const food3 = "pasta";
const food4 = "salad";

function openfridge(...foods) {
    console.log(...foods);
}

openfridge(food1, food2, food3, food4);

function getfood(...foods) {
    return foods;
}

const foodList = getfood(food1, food2, food3, food4);
console.log(...foodList);

// ----------------------------------------------------------------------
console.log("============================");
// ----------------------------------------------------------------------

function sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
const totalSum = sum(10, 20, 30, 40);

console.log(totalSum);