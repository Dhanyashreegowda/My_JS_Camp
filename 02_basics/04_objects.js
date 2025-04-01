// const tinderUser = new Object() //singleton Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "dhanu"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname:{
            firstname : "dhanya",
            lastname :"l"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"43" ,2:"b"}
const obj2 = {3:"6",4:"b"}

// const obj3 = {obj1,obj2}  //gives same prob as arrays objects inside objects
// console.log(obj3) 

const obj3 = {...obj1,...obj2} //using spread

// const obj3 = Object.assign(obj1,obj2) //using assign
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2) //using assign {} makes sure to give in {}
// console.log(obj3)

const userUSer = [
    {
        id:1,
        name:"dhanya"
    },
    {
        id:1,
        name:"dhanya"
    },
    {
        id:1,
        name:"dhanya"
    },
    {
        id:1,
        name:"dhanya"
    },
]  //inside arrays so many objects maybe to loop through

// console.log(userUSer[1].name)


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


