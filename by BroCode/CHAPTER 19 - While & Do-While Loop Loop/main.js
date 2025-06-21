let username;
username = window.prompt("Enter your name:");
while (username === "" || username === null) {
  username = window.prompt("Enter your name:");
}

console.log(`Hello, ${username}!`);