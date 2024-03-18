const user={
    username:"devansh",
    price: 999,
    //"this" is used to refer to current context
    welcomeMsg: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg();
// //changed the context/value to "sam"
// user.username="sam";
// user.welcomeMsg();

// node env mai "this" refers to an empty object
// browser mai "this" refers to Window object
// because before Js used to executed only on the browser which had the engine 
// console.log(this);


function chai() {
    let username="devansh"
    // console.log(this);
    // console.log(this.username); //undefined, 'this' refers to context only inside objects and not functions
}
// chai()

const chai2 = () => {
    let username="devansh"
    console.log(this);
}
// chai2();

const addNumbers = (num1,num2)=>{
    return num1+num2;
}
// console.log(addNumbers(1,2));

const addNumbers2 = (num1,num2)=> num1+num2; //implicit return
// console.log(addNumbers2(1,2));

//used in react, also useful for returning OBJECTS 
const addNumbers3 = (num1,num2)=>(num1+num2)
// console.log(addNumbers3(1,2));

const returnObject = () =>({username:"dev"})
// console.log(returnObject());