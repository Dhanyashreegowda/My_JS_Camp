const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map((num) => num+10)

// const newNums = myNumbers.map((num) => {
//     return num+10
// })

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// let newNums = []

// myNums.forEach((num) => {
//      return newNums.push(num+10)
// })



const newNums = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num +1)


console.log(newNums);