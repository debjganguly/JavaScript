function sum(call, a, b) {
  let result = a + b;
  call(result);
}

function printResult(result) {
  console.log("The result is: " + result);
}

sum(printResult, 5, 3);