let time = window.prompt("Enter time:");

if (time<12) {
    console.log("Good morning!");
} else if (time<18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
