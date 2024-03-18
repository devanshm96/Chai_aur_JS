//falsy values
// false, 0, -0, BigInt: 0n, "", null, undefined, NaN

//truthy values  
// "0", 'false', " ", [], {}, function(){}

//to check if object is empty
const emptyObj = {}

if(Object.keys(emptyObj).length===0) console.log("Obj is empty");

//Nullish Coalescing Operator (??): fallback against null and undefined values

let val1
val1=5??10
val1=null??33
val1=undefined??67
val1=null??28??70

console.log(val1);

//Ternary: condition ? true statement: false statement 