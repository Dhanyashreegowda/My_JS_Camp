const marvel_heros = ["thor" ,"ironman" ,"spiderman"]
const dc_heros =["superman","flash" ,"batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // [  []] can push to existing array
// console.log(marvel_heros[3][1]); // taking its indexes

// const all_heros = marvel_heros.concat(dc_heros)  // cant push to existing array hence -need variable to hold it or else no changes can be seen in main array
// console.log(marvel_heros)  // same old
// console.log(all_heros)  // concatenated without the need of [[]]  all inside one []


//more easy to use spread operator and more preffered
// spreads all elements
const all_heros = [...marvel_heros , ...dc_heros]
console.log(all_heros);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// flat can give deep like 1 or 2 or even infinity
const real_another_arr =another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("dhanya"))
console.log(Array.from("dhanya"))  //converts to array

console.log(Array.from({name : "hitesh"}))  //interesting

let score1= 100;
let score2 = 200;
let score3 ="300";
console.log(Array.of(score1,score2,score3));
