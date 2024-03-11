let date = new Date();
// console.log(date.getMonth());

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());
date.toLocaleString('default', {
    weekday: "long"
})
// console.log(date.toJSON());
// console.log(typeof date);

// let myCreatedDate = new Date(2024,2,9,17,30);
let myCreatedDate = new Date("09-03-2024");
// console.log(myCreatedDate.toLocaleString());

// console.log(Date.now()); //milliseconds
// console.log(Math.floor(Date.now()/1000)); //seconds
// console.log(myCreatedDate.getTime());
