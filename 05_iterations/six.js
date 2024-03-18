const myNums=[1,2,3]

//useful in shopping cart
// const myTotal = myNums.reduce(function(accumulator, currval){
//     console.log(`Accumulator: ${accumulator} and currval: ${currval}`);
//     return accumulator+currval
// }, 0)

// const myTotal = myNums.reduce((accumulator,currval)=>(accumulator+currval),0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "app dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 9999
    },
]

const totalPrice = shoppingCart.reduce((acc,currval)=>(acc+currval.price),0)
console.log(totalPrice);