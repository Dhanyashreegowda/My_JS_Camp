// IF

const isUserLoggedIn = true;
if (isUserLoggedIn){

}
// 3!=2
//<,>,<=,>=,==,!=,===(strict equal)

// if (2=="2"){
//     console.log("executed")

// }  // works     only checks value

// if (2==="2"){
//     console.log("executed")

// }   //doesnt work checks dt and value


// const score = 200
// if (score >100) {
//     let power = "fly"
//     console.log(`user power : ${power}`);

// }
// console.log(`user power : ${power}`);

const balance = 1000

// if (balance >500) console.log("test")

// if (balance >500) console.log("test") , console.log("test2");
// dont write like above

// IF ELSEIF ELSE

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less tan 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = false

if (userLoggedIn && debitCard) {
    console.log("allown to buy course");
}

if (LoggedInFromEmail || LoggedInFromGoogle){
    console.log("user logged in");
} else {
    console.log("user cant login")
}


