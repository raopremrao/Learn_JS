const name = "Prem"
const repocount = 15

// console.log(name + repocount + "Only");

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('T Prem')

console.log(gameName[0]);

console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(1));
console.log(gameName.indexOf(' '));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   T Prem  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tprem.com/prem%20t"

console.log(url.replace('%20', '-'));

console.log(url.includes('tprem'));

console.log(typeof(url));

console.log(gameName.split('-'));
