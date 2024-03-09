// object is singleton only if it is made from constructor, Object.create 

let mySym = Symbol("key1");

//object literals
let JsUser = {
    name:"Dev",
    [mySym]:"key1", //adding symbol as a key
    age:21,
    gender:"male",
    lastLoginDays:["Mon","Fri"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);

// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

// Object.freeze(JsUser);
JsUser.email = "123@123.com"
// console.log(JsUser);

JsUser.greeting = function(){
    return "Hello JS user!";
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
JsUser.greetingTwo();