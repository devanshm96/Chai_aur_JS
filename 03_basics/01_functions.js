 function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");
 }
 // sayMyName - function reference
 // sayMyName() - function calling, executes the function

function loginMessage(username){
    if(!username){
        return `Please enter a username`
    }
    return `${username} just logged in`
}

console.log(loginMessage(""));
console.log(loginMessage("Devansh"));

//rest operator
function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(100,200,300));

const user1 = {
    username:"devansh",
    isLoggedIn: false
}
function handleUser(anyUser) {
    console.log(`Username is ${anyUser.username} and logged-in: ${anyUser.isLoggedIn}`);
}
handleUser(user1);