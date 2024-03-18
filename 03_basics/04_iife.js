// Immediately Invoked Function Expression (IIFE)
/* Why we want function to be immediately called?
    1)we want to setup a DB connection as soon as the file containing iify is executed
    2) We dont want global scope to pollute the function 
*/
// Named IIFE
(function chai() {
    console.log(`DB Connected One`);
})(); // we need to end the code with semicolon otherwise the next IIFE gives error

((dbName)=>{
    console.log(`DB Connected Two ${dbName}`);
})('SampleDB')


// const chai3 = function() {
//     console.log(`DB Connected Three`);
// }()

