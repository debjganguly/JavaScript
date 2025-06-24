// Theory: The console object provides access to the browser's debugging console

// 1. console.log()

console.log("console.log()");

// 2. console.error()

console.error("This is a error message.");

// 3. console.warn() 

console.warn("This is a warning.")

// 4. console.info()

console.info('%cThis is a styled info message!', 'color: blue; font-size: 16px; font-weight: bold;');

// 5. console.table()

console.table([{name: 'Amit', age: 30}, {name: "Jatin", age: 25}]);

// 6. console .time() & console .timeEnd()

console.time('timer1');
function loops() {
    for (let i = 0; i <= 10000; i++) {

    }
}

loops()

console.timeEnd('timer1');

// 7. console.assert()

console.assert(5 > 10, "This assertion failed");

// 8. console .group() and console.groupEnd()

console.group('User Information');
console.log('Name: Ritik');
console.log('Age: 30');
console.groupEnd();

// 9. console.count()

console.count("countLabel");  
console.count("countLabel"); 
console.count("countLabel");
console.count("countLabel");

// 10. console.trace()

function a() {
    b()
}
function b() {
    c()
}
function c() {
    console.trace()
}
a()