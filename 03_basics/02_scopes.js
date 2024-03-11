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
console.log(c);

// global scope in node env is DIFFERENT from scope in browser console