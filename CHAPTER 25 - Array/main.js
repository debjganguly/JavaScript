let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits); // Print the array

fruits.push('Coconut'); // Add a new fruit at last
fruits.pop(); // Remove the last fruit
fruits.unshift('Mango'); // Add a new fruit at the beginning
console.log(fruits);   

let num = fruits.length; // Length of the array
let index = fruits.indexOf('Banana');
console.log(num);
console.log(index); 

fruits.sort();
console.log(fruits); // Print the sorted array

fruits.sort().reverse(); // Sort the array in reverse order
console.log(fruits); // Print the reversed sorted array