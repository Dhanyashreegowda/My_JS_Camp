// var c =300

//scope exists between {}
let a = 300
if(true){
    let a=10
    const b =20
    // var c=30  or just c= 30  defines global scope
    // console.log("INNER :" ,a)

}


// console.log(a);
// console.log(b);
// console.log(c);    // var has global scope -problem

//NESTED SCOPE
function one(){
    const username = "hitesh"

    function two(){
        const website ="youtube"
        // console.log(username);
        // console.log(website);
    }
    // console.log(website);
    two()
    
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        // console.log(username +website);
    }
    // console.log(website);
    // console.log(username);
}
// console.log(username);

//**********INTERESTING********* */
console.log(addOne(5))  // just funtion without variable can be accessed because of its scope
function addOne(num){
    return num + 1
}
// addOne(5)
// console.log(addOne(5))


//expression ------funtion with variable
// console.log(addTwo(4)) --- funvtion with variable before only cant be called
const addTwo = function(num){
    return num + 2
}
addTwo(5)
// console.log(addTwo(4))


