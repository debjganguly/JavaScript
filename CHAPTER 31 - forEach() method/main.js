let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(print);

function double(element, index, array) {
    array[index] = element * 2;
}

function print(element) {
    console.log(element);
}