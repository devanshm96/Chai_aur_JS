let a=10
const b=20
var c=30

if(true){
    //block scope
    let a=10
    const b=20
    var c=300
}
// console.log(a);
// console.log(b);
// console.log(c);

// global scope in node env is DIFFERENT from scope in browser console

function one() {
    const username="devansh";

    function two() {
        const age=21;
        // console.log(username);
    }
    // console.log(age); //error

    two(); //calling
}
one(); // calling one
// console.log(username); //error

addOne(5);
function addOne(num) {
    return num+1;
}

// addTwo(5); //cannot access function before initialization
const addTwo = function (num) {
    return num+2;
}