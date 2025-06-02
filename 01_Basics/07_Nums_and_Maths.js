const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toFixed(1));

const otherNumber = 100222.123456789
// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));




// ++++++++++++++++ Maths ++++++++++++++++

console.log(Math);
console.log(Math.abs(-5)); // Absolute value
console.log(Math.round(4.6)); // Round to nearest integer
console.log(Math.ceil(4.1)); // Round up
console.log(Math.floor(4.9)); // Round down
console.log(Math.min(1, 2, 3, -1, -2)); // Minimum value
console.log(Math.max(1, 2, 3, -1, -2)); // Maximum value
console.log(Math.random()); // Random number between 0 and 1
console.log((Math.random() * 100) + 1); // Random number between 1 and 100

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))