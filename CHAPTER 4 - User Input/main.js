// Easy Way


// let username;

// username = window.prompt("What is your Username?");

// console.log("Hello " + username + "!");

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    // console.log("Hello " + username + "!");
    document.getElementById("result").textContent = "Hello " + username + "!";
}