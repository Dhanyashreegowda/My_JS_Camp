// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("weather data");
//             resolve(200);
//         },2000)
//     });
// }

// async function getWeatherData() {
//     await api(); //1st
//     await api();
// }



function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success")
            // reject("failed failed") for catch
           
        }, 3000);
    })
}

//Async-await

// async function getAllData() {
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
//     console.log("getting data 4...");
//     await getData(4);
//     console.log("getting data 5...");
//     await getData(5);
   
// }

// getAllData();   /// to resolve this calling we can use IIFE ___IMMeadiately invoked function

// IIFE is a function that is called immediately as soon as it is defined.[not named] [written once and executed on spot]
// to avoid polluting the global namespace or scope, and for async function 
// for example if we want to use the variable defined only once 
//IIFE


(async function () {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
    console.log("getting data 4...");
    await getData(4);
    console.log("getting data 5...");
    await getData(5);
   
}) ();







