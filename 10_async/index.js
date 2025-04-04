// function hello() {
//     console.log("hello world");
    
// }
// setTimeout (hello, 4000); //timeout


// console.log("one");
// console.log("two");

// setTimeout( () => {
//     console.log("hello");
// },4000)


// console.log("three");
// console.log("four");

//------------------------------

// function sum (a,b) {
//     console.log(a + b);
// }
// function calculater (a ,b, callingsum) {
//     callingsum(a,b);
// }

// // calculater(1, 2 , sum)

// calculater(1,2,(a,b) => {
//     console.log(a+b);
    
// })

//----------------------------
// const hello = () => {
//     console.log("hello");  
// }
// setTimeout(hello, 3000);


//Callback Hell


//nesting
// let age = 29;
// if(age >= 18){
//     if (age >= 60) {
//         console.log("senior");      
//     } else {
//         console.log("middle");
        
//     }
// } else {
//     console.log("child");
    
// }


// for (let i = 0; i < 5; i++) {
//   let str ="";
//   for (let j = 0 ; j< 5 ; j++){
//     str=str + "*   ";
  
//   }
//   console.log(str);
// }

// for (let i = 0; i < 5; i++) {
//     let str = "";
//    for (let j = 0; j < 5; j++) {
//     str += j
//    }
//    console.log(i,str);
// }


function getData (dataId) {
    setTimeout(() => {
        console.log("data",dataId);
    }, 2000);
    
}
getData(1);
getData(2);
getData(3);













