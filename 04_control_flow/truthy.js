// const userEmail = "dhanya@google.com"

// if empty string ,dont have user emial  const userEmail = " "
// if empty array , got user email  const userEmail = []
// becuase of truthy and falsy valuess

// if (userEmail) {
//     console.log("Got user email");   
// } else {
//     console.log("Dont have user email");
    
// }


// falsy values
// false , 0 , -0, BigInt 0n , "" , null, undefined , NaN

// other than these are truthy values
//truthy values
// true , 1, "0"  , 'false' , " "(has space) , [] ,{} ,
// funtion(){} (empty function)


// const userEmail = [1]
// if (userEmail.length === 0){
//     console.log("array is empty");
    
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length ===0){
//     console.log("object is empty");
    
// }

// const a = false ==0
// console.log(a);

// false == 0 ---> true
// false == '' -->true
// 0 == '' ---> true 

// Nullish Coalescing Operator (??) : FOR--> null undefined
// if errors comes how to got through it by assigning it a value
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);


// TERNARY OPERATOR
// small syntax for if else

// condition ? true  : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");





