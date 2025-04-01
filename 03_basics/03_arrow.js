const user = {
    username : "hitesh",
    price : 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // this. above refers to current context in {}
        console.log(this);
    }
}

// console.log(this);  //{}

// user.welcomeMessage()
// user.username = "sam"  // context changed
// user.welcomeMessage()


// can be used inside objects but  not inside function context zo below are undefined
// function chai (){
//     let username = "dhanya"
//     console.log(this.username)
// }
// chai()

// const chai = function() {
//     let username = "dhanya"
//     console.log(this.username)   //undefined
// }
// chai()

// const chai = () => {
//     let username = "dhanya"
//     console.log(this) //{}
//     console.log(this.username) //undefined
// }
// chai()

//{} needs return keyword  //explicit return
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>  (num1 + num2 )  //implicit return
const addTwo = (num1,num2) =>  ( {username:"dhanya"})
console.log(addTwo(3,4))



