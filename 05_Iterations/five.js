// FOR EACH

const coding = ["js" , "ruby" , "java" , "python" ,"cpp"]

// array.forEach(element => {
    
// });

// coding.forEach(function (item) {
//     console.log(item);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// } )


// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)


coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);   

})



const myCoding = [
    {
        langName : "javascript",
        langFileName : "js"
    },
    {
        langName : "python",
        langFileName : "py"
    },
    {
        langName : "java",
        langFileName : "java"
    }
]


myCoding.forEach( (item) => {
    console.log(item.langName);
})