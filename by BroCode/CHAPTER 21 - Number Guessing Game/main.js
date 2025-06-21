const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);

let attempts = 0;
let guess;
let running = true;

while (running = true) {

    guess = window.prompt(`Guess a number between ${min} and ${max}:`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("Please enter a valid number.");
    } else if (guess < min || guess > max) { 
        window.alert(`Please enter a number between ${min} and ${max}.`);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("Too low! Try again.");
        } else if (guess > answer) {
            window.alert("Too high! Try again.");
        } else {
            window.alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            running = false;
        }
    }
}
