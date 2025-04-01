//array  - storing collection of multiple items of [MIXED DT]datatypes under a single variable --RESIZABLE
// // zero based indexing 
// js allows array COPY operations create shallow copies . (All standard built-in copy operations with any js objects create shallow copies, rather than deep_copies).
// shallow copy of an object is a copy whose properties share the same references as those of source object from which copy is made 
// deep copy of an object is a copy whose properties do not share the same references


const myArr = [0,1,2,3,4,5,true,"dhanya"]
const myFruits = ["apple","mango","grapes"]

const myArr2 = new Array (1,2,3,4,54)
// console.log(myArr2[1])
// console.log(myArr[4])


// ARRAY METHODS
// myArr.push("dhanu")  //to add at last 
// myArr.push("7")
// myArr.pop()   //to remove at last

myArr.unshift(9)   //not used mostly becuase of load (adds at starting)
myArr.shift()   // removes at starting
myArr.shift()

// console.log(myArr);

// can ask questions which results in true of false

const myArray = [1,2,3,5,7,9,4,24,5]
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));  //5
// console.log(myArray.indexOf(6));  //-1 doesnt know if it exists

const sameArr = myArray.join()  // joins arrays as strings

// console.log(myArray);    // comes in [] as usual
// console.log(typeof myArray);     // object
// console.log(sameArr);    // comes without [] as strings
// console.log(typeof sameArr);     // string

// slice and splice

console.log("A" , myArray);
const myn1 = myArray.slice(1,3)  // starts with 1 index excludes 3 (last range)  , plus doesnt effect the original array

console.log("B" , myArray);
console.log(myn1);


const myn2 = myArray.splice(1,3)  // 1. includes last range ,plus removes this part in the original array
console.log("C" , myArray);
console.log(myn2);

