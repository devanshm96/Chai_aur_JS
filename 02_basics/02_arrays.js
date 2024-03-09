const marvel = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// updates the existing
// marvel.push(dc)
// console.log(marvel);

//returns a new array
const allHeroes = marvel.concat(dc);
console.log(allHeroes);

const allNewHeroes = [...marvel,...dc]; //spread 
console.log(allNewHeroes);

const nestedArray = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const flatArray = nestedArray.flat(Infinity)
console.log(flatArray);

console.log(Array.isArray("Devansh"))
console.log(Array.from("Devansh"));
console.log(Array.from({name:"Devansh"})); // empty array, we need to specify if we want an array of keys or array of values

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));