let myArr = [1,2,3,4,5,6,7,8,9];
console.log(typeof myArr);
console.log(myArr.includes(0));
console.log(myArr.indexOf(10));

let newArr = myArr.join("<");
console.log(newArr);
console.log(typeof newArr);

let A = [0,1,2,3,4,5,6];
console.log("Arr Before: ",A);

console.log("Sliced out: ", A.slice(1,3)); 
console.log("Arr After slice: ", A);

console.log("Spliced out: ", A.splice(1,3)); // manipulates original array
console.log("Arr After splice: ", A);