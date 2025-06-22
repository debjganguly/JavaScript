// Theory: The switch statement evaluates an expression and executes a block of code based on matching cases. It provides an alternative to long if-else chain.

const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the workweek.");
        break;
    default:
        console.log("It's a regular day.");
}