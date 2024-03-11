const firstName="Devansh";
let age=21;

// console.log(`I am ${firstName} and I am ${age} yo`);

const lastName = new String("Mudgal-Indore-MP");

// console.log(firstName[0]); // key-value pairs
// console.log(firstName.__proto__);

const subStr = lastName.substring(0,4);
// console.log(subStr);

// slice allows negative indexes
const slicedStr = lastName.slice(-15,4);
// console.log(slicedStr);

// console.log(lastName.substring(5,4)); // start pos is greater than the end pos, substring will swap the two arguments
// slice returns empty string if start is greater than end
// console.log(lastName.slice(5,4));


const url = "https://devmudgal.com/devansh%20mudgal"
console.log(url.replace('%20','-')); //creates a copy and replaces in that
console.log(url);// original string not changed

console.log(url.includes('dev'));

console.log(lastName.split('-')); //converting string to array
