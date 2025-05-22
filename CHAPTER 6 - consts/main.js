const PI = 3.14159;
let radius, circumference;

// radius = window.prompt("Enter the radius of the circle");
// radius = Number(radius);
// circumference = 2 * PI * radius;

// console.log("The circumference of the circle is: " + circumference);

document.getElementById("btn").onclick = function() {
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = "The circumference of the circle is: " + circumference + " cm";
}