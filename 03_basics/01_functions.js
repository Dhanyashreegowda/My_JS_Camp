function sayMyName() {
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");  
}
// sayMyName()

// //parameter
// function addTwoNum(num1,num2){
//     console.log(num1 + num2)
// }

function addTwoNum(num1,num2){
    // let resultt = num1 +num2
    // return resultt
    //after return no code below is executing
    return num1 + num2
}
let result = addTwoNum(5,9)  //while calling we pass values are arguments

// console.log("result", result);

// function loginUserMessage(username) {
//     return `${username} just logged in` //string interpolation
// }

// loginUserMessage(dhanya)   // error dhanya not defined
// loginUserMessage("dhanya")   //ntg happens

// console.log(loginUserMessage("dhanya") )   //to print


// console.log(loginUserMessage() )  //undefined just logged in

// function loginUserMessage(username) {
//     if (username === undefined) {
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in` //string interpolation
// }

// function loginUserMessage(username = "sam") {
//     if (!username) {
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in` //string interpolation
// }

// console.log(loginUserMessage() )  

//just num1 gives 200 
// ...num1 REST -pack it and give

function calculatePrice (val1, val2, ...num1){
    return num1
}
console.log(calculatePrice(200,3000,400,400,500,200,100))

// FOR OBJECT
const user ={
    username : "dhanya",
    prices : 9999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}

// handleObject(user)
handleObject({
    username : "sam",
    prices:3892389
})

// FOR ARRAY
const myNewArr =[200,300,400,100]

function returnSomeValue(anyArray) {
    return anyArray[2]
}
// console.log(returnSomeValue(myNewArr))
console.log(returnSomeValue([200,300,200,100]))


