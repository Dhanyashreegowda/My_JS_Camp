// let promise = new Promise((resolve , reject) =>{
//     console.log("iam a promise");
//     // resolve("success");
//     // reject("someee errorr") // error message
// });

// function getData(dataId,getNextData) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             // resolve("success")
//             reject("failed failed")
//             if(getNextData){
//                 getNextData();
//             }
           
//         }, 10000);
//     })
// }

// let final = getData(123);


//-------------------------------------------

// const getPromise = ()  => {
//     return new Promise((resolve , reject) =>{
//         console.log("iam a promise");
//         // resolve("success");
//         // reject("failed")
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled ",res);
    
// });

// promise.catch((err) => {
//     console.log("rejected" , err);
    
// });
// -------------------------------------------------

// function asyncFunc() {
//     return new Promise ((resolve , reject) => {
//         setTimeout(() => {
//             console.log("some data 11111111");
//             resolve("sucesssssss")
//         },4000);
//     });
// }

// console.log("fetching data 1");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res); 
// });

// ------------------------------------------------

// if only data1 resolve move to next promise

function asyncFunc1() {
    return new Promise ((resolve , reject) => {
        setTimeout(() => {
            console.log("some data 11111111");
            resolve("sucesssssss")
        },4000);
    });
}

function asyncFunc2() {
    return new Promise ((resolve , reject) => {
        setTimeout(() => {
            console.log("some data 22222222");
            resolve("sucesssssss")
        },4000);
    });
}

// console.log("fetching data 1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res); 
//     console.log("fetching data 2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);       
//     })
// });

// console.log("fetching data 1");
// asyncFunc1().then((res) => {
//     console.log(res); 
//     console.log("fetching data 2");
//     asyncFunc2().then((res) => {
//         console.log(res);       
//     })
// });

//----------------------------------------------



// function getData(dataId,getNextData) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success")
//             // reject("failed failed")
//             if(getNextData){
//                 getNextData();
//             }
           
//         }, 5000);
//     })
// }


// //CALLBACK HELL  -- instead we use promise chain
// getData(1,() => {
//     console.log("getting data2 ...");
//     getData(2,() => {
//         console.log("getting data3 ....");
//         getData(3,() =>{
//             console.log("getting data4....");
//             getData(4)
//         })
        
//     })
// })


function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success")
            // reject("failed failed") for catch
           
        }, 3000);
    })
}

//PROMISE CHAIN

// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
    
// } );

// getData(1).then((res) => {
//     console.log(res); 
//     getData(2).then((res) => {
//        console.log(res);    
//     })
// });


getData(1)
.then((res) => {
    console.log(res);
    return getData(2);
})
.then((res) => {
    console.log(res);
    return getData(3);   
})
.then((res) => {
    console.log(res);
});


// difficult// call back , callback hell 
// better// promise , promise chain
// more better // async -await


