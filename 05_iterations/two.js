const myObj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} stands for ${myObj[key]}`);
}

// Arrays: 'for of': values are printed, 'for in': keys are printed by default
const programming = ["js","cpp","py","java","rb"]
for (const key in programming) {
    console.log(`${programming[key]}`);
}
// for (const [key,value] in programming.entries()) {
//   console.log(`Key: ${key}, Value: ${value}`);
// }

//Maps are not iterable with 'for in' - NO OUTPUT
// const map = new Map();
// map.set('IN',"India")
// map.set('CN',"China")
// map.set('FR',"France")

// for (const [key,value] in map) {
//     console.log(key+" "+value);
// }