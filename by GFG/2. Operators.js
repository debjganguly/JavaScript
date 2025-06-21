// Theory: Symbol or Keywords that perform operations on values and variables
// They are of the following Types:

// 1. Arithemtic Operators:
console.log("1. Arithemtic Operator:")
console.log("5 + 5 = " + (5+5)); // Addition
console.log("5 - 5 = " + (5-5)); // Subtraction
console.log("5 * 5 = " + (5*5)); // Multiplication
console.log("5 / 5 = " + (5/5)); // Division
console.log("5 % 5 = " + (5%5)); // Modulus - Returns remainder

console.log("------------------------------");

// 2. Assignment Operators:
console.log("2. Assignment Operator:")
let n = 5;
console.log("n+=5 gives " + (n+=5));
console.log("n-=5 gives " + (n-=5));
console.log("n*=5 gives " + (n*=5));
console.log("n/=5 gives " + (n/=5));
console.log("n%=5 gives " + (n%=5));

console.log("------------------------------");

// 3. Comparision Operators:
console.log("3. Comparision Operator: ");
let a = 7, b = 9;
console.log(a>b);
console.log(a==b);

console.log("------------------------------");

// 4. Logical Operators:
console.log("4. Logical Operators: ");
let c = true;
let d = false;
console.log( c && d ); // Logical and
console.log( c || d); // Logical or

console.log("------------------------------");


// 5. Bitwise Operators:
console.log("5. Bitwise Operators: ");
let e = 3, f =6;
console.log(e&f); // bitwise and
console.log(e|f); // bitwise or
console.log(e^f); // bitwise XOR
// console.log(e~f); // bitwise not

console.log("------------------------------");

// 6. Ternary Operator:
console.log("6. Ternary Operators: ");

let g = 8, h = 9;
let status = (g>h) ? console.log("yup") : console.log("nope");
console.log("------------------------------");

// 7. Comma Operator: 
console.log("7. Comma Operators: ");

let i,j;
let status2 = (i=1,j=2,i+j);
console.log(status2);
console.log("------------------------------");

// 8. Unary Operator:

console.log("8. Unary Operators: ");

let k=6;
console.log(k++);
console.log(k++);
console.log(++k);
console.log(--k);

console.log("------------------------------");

// 9. Relational Operator:

console.log("9. Relational Operators: ");

const obj = { length: 10 };
console.log("length" in obj);
console.log([] instanceof Array);

console.log("------------------------------");

// 10. BigInt Operator:


console.log("10. BigInt Operators: ");

const big1 = 12345678910n;
const big2 = 987654321n;
console.log(big1 + big2);

console.log("------------------------------");

// 11. String Operators:

console.log("11. String Operators: ");

const s = "hello" + " " + "world";
console.log(s);

console.log("------------------------------");

// 12. Chaining Operator:

console.log("12. Chaining Operators: ");

const obj2 = { name: "Aman", address: { city: "Delhi" } };
console.log(obj2.address?.city);
console.log(obj2.contact?.phone);

console.log("------------------------------");
