const programming = ["js","cpp","py","java","rb"]

// programming.forEach(function (val) {
//     console.log(val);
// })

// programming.forEach((val)=>{
//    console.log(val); 
// })

// function printMe(val) {
//     console.log(val);
// }
// programming.forEach(printMe); //pass reference of the function

programming.forEach((val,index,arr)=>{
    console.log(val,index,arr);
})

const myProject = [
    {
        langName:"javascript",
        fileExtension:"js"
    },
    {
        langName:"python",
        fileExtension:"py"
    },
    {
        langName:"C++",
        fileExtension:"cpp"
    }
]

myProject.forEach((val)=>{
    console.log(val.langName);
})
