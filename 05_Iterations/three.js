// for of

// ["" , "" ,""]
// [{},{},{}]

const arr = [1,2,3,4,5,7]

for (const num of arr) {
    // console.log(num);
}


const greetings = "hello world!"
for (const i of greetings){
    // if (i == " "){
    //     continue
    // }
    // console.log(`Each char is ${i}`)
}



// MAPS

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('Fr',"France")
map.set('IN',"India")  // map only returns unique values
// console.log(map);



// FOR OF

// for (const key of map) {
//     console.log(key); 
// }

// for (const [key , value] of map) {
//     console.log(key,':-' ,value); 
// }

const myObject1 = {
    Game1 : "NFS",
    'game2' : 'MarioGO'
}

// for (const [key ,value] of myObject1) {
//     console.log(key,':-' ,value); 
// }        // doesnt work for forof  in objects







