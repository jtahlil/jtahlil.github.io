const myArray = [1];

const numbers = [1, 2, 3, 4, 5, 8, 10];

const numbers = [1, 2, 3, 4, 5, 8, 10];
console.log(numbers[1]);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
const numbers = [1, 2, 3, 4, 5, 8, 10];
numbers.push(12);
console.log(numbers);
numbers.pop();
console.log(numbers);

const items = [1, 'two', [3, 3], false, null]

const items = [1, 'two', [3, 3], false, null]
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
function arrayToString(array) {
    console.log(array.join(', '));
}

function stringToArray(input) {
    console.log(input.split(','));
}


arrayToString(["bundle.js, *.js.map, .c9"])

stringToArray("buondle.js, *.js,map, .c9");