const decrement = document.getElementById("decrementButton");
const increment = document.getElementById("incrementButton");
const counter = document.getElementById("countLabel");
const reset = document.getElementById("resetButton");

let count =0;

increment.onclick = function() {
    count++;
    counter.textContent = count;
}
decrement.onclick = function() {
    count--;
    counter.textContent = count;
}
reset.onclick = function() {
    count = 0;
    counter.textContent = count;
}