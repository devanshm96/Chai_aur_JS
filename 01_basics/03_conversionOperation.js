let score="33";
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));

score="33n"
valueInNumber=Number(score); //NaN
// console.log(typeof(valueInNumber)); // number
// console.log(valueInNumber);

score="dev";
valueInNumber=Number(score)// NaN

score=undefined;
valueInNumber=Number(score); //NaN

score=null;
valueInNumber=Number(score); // 0
// console.log(valueInNumber);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

isLoggedIn = "";
booleanIsLoggedIn=Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let someNumber=12
let stringNumber = String(someNumber);
// console.log(stringNumber);


//*************Operations*******/

let value=3;
let negativeValue=-value;


let str1="hello";
let str2 = " dev";
let str3 = str1+str2;
// console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2"+" is a "+typeof(1+2+"2"));

console.log(3+4*5%3);

console.log(+true); // 1
console.log(+""); //0