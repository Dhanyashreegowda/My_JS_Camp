// singleton   --objects created not using literal notation ,but using function constructor 

//object literals
// Object.create //this is constructor method 

const mySym = Symbol("key1")

const JsUser = {
    name : "dhanya",
    "full name": "dhanyashree",
    [mySym] : "mykey1",
    age : "21",
    location: "bangalore",
    email: "dhanya@google.com",
    isLoggedIn : false,
    lastLoginDaya : ["monday","saturday"]
}


console.log(JsUser.name)
// console.log(JsUser.full name) // cant acces spaces
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "dhanya@amazon.com" // can be changed
console.log(JsUser.email)

// Object.freeze(JsUser)    // object froze cant be changed 
JsUser.email="dhanya@google.com"  // cant be changed back


JsUser.greeting = function () {
    console.log("dhanya learn learn!");
}
JsUser.greetingTwo = function () {
    console.log(`Hello stupid , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())
// if not frozen
// console.log(JsUser.greeting);  function (annoymous)
// console.log(JsUser.greeting()); prints

// if frozen
// console.log(JsUser.greeting);  gives undefined
// console.log(JsUser.greeting()); gives error not a function

