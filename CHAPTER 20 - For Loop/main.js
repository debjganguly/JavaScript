for(let i=10;i>=1;i--) {
    if(i === 5) {
        console.log("Skipping 5");
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(i);
}
console.log("Happy Birthday to you!");