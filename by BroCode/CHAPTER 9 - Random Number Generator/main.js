const btn = document.getElementById("button");
const label = document.getElementById("label");
const min = 1;
const max = 6;
let randomNumber;

btn.onclick = function () {
    randomNumber = Math.floor(Math.random() * (max)) + min;
    label.textContent = randomNumber;
}