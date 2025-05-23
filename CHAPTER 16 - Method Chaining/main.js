let username = window.prompt("Enter your name");
username=username.trim();
let firstLetter = username.charAt(0).toUpperCase();
let rest = username.slice(1).toLowerCase();
let capitalizedUsername = firstLetter + rest;
console.log(capitalizedUsername);