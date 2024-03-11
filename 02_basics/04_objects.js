// Singleton object, made from constructor
// const tinderUser=new Object()

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Anu",
            lastname:"mudgal"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

// copying from source object(s) to target object
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// Object.assign(obj1,obj2);
// console.log(obj1);

const obj3 = {5:"e",6:"a"}
// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const tinderUser = {}

tinderUser.id="123absc"
tinderUser.name="Devu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log("Keys: ", Object.keys(tinderUser));
// console.log("Values: ", Object.values(tinderUser));
// console.log("Entries: ", Object.entries(tinderUser));

// console.log("Has property? ",tinderUser.hasOwnProperty('isLoggedIn'));

// Object Destructuring
const someObject = {
    impKey:"Imp value",
    key2:"key2 value"
}

//instead of using someObject.impKey everytime
const {impKey: handyVariableName} = someObject;
console.log(handyVariableName);


// API data in arrays 
[
    {},
    {},
    {}
]