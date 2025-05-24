const temp = window.prompt("Enter the temperature in Celsius");
if (temp === null) {
    console.log("User cancelled the prompt.");
} else {
    const tempNum = parseFloat(temp);
    if (tempNum < 0) {
        console.log("It's freezing outside!");
    } else if (tempNum >= 0 && tempNum <= 30) {
        console.log("The temperature is moderate.");
    } else {
        console.log("It's hot outside!");
    }
}