const array1 = [1,2,3,4,5,6];


// const myTotal1 = array1.reduce ( function (acc , curval){
//     console.log(`acc: ${acc} and currval : ${curval}`);
    
//     return acc + curval
// },0)
// 0 is the initial accumulator value it can be anything


const myTotal1 = array1.reduce( (acc, curr) => acc+curr ,0)

console.log(myTotal1);



const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "ml course",
        price : 3999
    },
    {
        itemName : "ai course",
        price : 8999
    },
]

const  priceToPay = shoppingCart.reduce((acc ,item) => acc + item.price ,0)

console.log(priceToPay);







