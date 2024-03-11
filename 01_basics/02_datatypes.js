"use strict" //treat all JS code as newer version of JS

// alert("Hi") Error: we are using node, not browser

/*
PRIMITIVE - 7 types

N  null => type of object, refers to an empty value 

N  Number

S  Symbol - Symbol(”i am a nice symbol”), to make a component unique

S  String

B  Boolean true/false

B  BigInt - BigInt("35") + BigInt("5")

U  undefined - let g = undefined;  or let g;  something not defined
*/

// console.log(typeof null);  //object
// console.log(typeof(undefined)); //undefined

const firstID = Symbol('000');
const secondID = Symbol('000');
// console.log(firstID===secondID); //false

const bigNumber = 123457890123456789n;

/*
NON-PRIMITIVE aka Reference data types

Objects - key-value pair, Array, Function, Date
*/
const fruits = ["Apple","Banana","Orange"]; //Array
const items = { apple: true, //Object
                orange: false,
                mango : 67,
                berry: 68,
                gogo: undefined
            }

// console.log(items["mango"]);
// console.log(items.berry);

//functions are first-class citizens - they can be stored in variables or passed to other functions as arguments
const myFunc = function(){}; //function definition 

// console.log(typeof fruits);
// console.log(typeof items);
// console.log(typeof myFunc);

// Stack Memory  (PRIMITIVE) ,Heap Memory (NON-PRIMITIVE)
let firstName = "dev";
let secondName = firstName; // copy of value of firstname is assigned to secondname
secondName = "mudgal"; 

console.log(secondName);
console.log(firstName);

let userOne = {
    email:"123@gmail.com",
    upi:"userOne@sbi"
}

let userTwo = userOne;

userTwo.email="userTwo@gmail.com";

console.log("User 1 email: "+userOne.email);
console.log("User 2 email: "+userTwo.email);
