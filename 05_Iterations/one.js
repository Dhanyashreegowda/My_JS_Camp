// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


// [press ctrl + D ] again and again to select and replace

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// console.log(element);  error cant be accesed because for is block scoped

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element ==5) {
//         console.log("5 is best num");
//     }
//     console.log(element);
    
// }

// outer loop value : 0
// inner loop value 0 and inner loop 0
// inner loop value 1 and inner loop 0
// inner loop value 2 and inner loop 0
// inner loop value 3 and inner loop 0
// inner loop value 4 and inner loop 0
// inner loop value 5 and inner loop 0
// inner loop value 6 and inner loop 0
// inner loop value 7 and inner loop 0
// inner loop value 8 and inner loop 0
// inner loop value 9 and inner loop 0
// outer loop value : 1
// inner loop value 0 and inner loop 1
// inner loop value 1 and inner loop 1
// inner loop value 2 and inner loop 1
// inner loop value 3 and inner loop 1
// inner loop value 4 and inner loop 1
// inner loop value 5 and inner loop 1
// inner loop value 6 and inner loop 1
// inner loop value 7 and inner loop 1
// inner loop value 8 and inner loop 1
// inner loop value 9 and inner loop 1
// outer loop value : 2

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value : ${i}`)
//    for (let j = 0; j < 10; j++) {
//     console.log(`inner loop value ${j} and inner loop ${i}`);
    
//    }
// }



for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value : ${i}`)
   for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value ${j} and inner loop ${i}`);
    //console.log( i + '*' + j + ' = ' + i*j );
    
   }
}


let myArray = ["flash" , "batman" , "superman"]
// console.log( myArray.length);  //3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

//KEYWORDS
// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i  is ${index}`);  
// }
   
for (let index = 0; index <= 20; index++) {
    if (index == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i  is ${index}`);  
}
   

