//For of loop
const programming = ["js","cpp","py","java","rb"]
for (const value of programming) {
//   console.log(value);
}

for (const keys of programming.keys()) {
    // console.log(keys);
}

for (const [index,value] of programming.entries()) {
    // console.log(`Index ${index} : Value ${value}`);
}

const greetings="Hello World!"
for (const greet of greetings) {
    if(greet==' ') continue;
    // console.log(`Each char is: ${greet}`);
}

//Maps - only unique values, order of values is maintained

const map = new Map()
map.set('IN',"India") 
map.set('CHN',"China")
map.set('FR',"France")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);
}

//objects not iterable with 'for of' - ERROR
// const myObj={
//     js:'javascript',
//     cpp:'C++',
//     rb:'ruby',
//     swift:'swift by apple'
// }

// for (const key of myObj) {
//     console.log(`${key} stands for ${myObj[key]}`);
// }

