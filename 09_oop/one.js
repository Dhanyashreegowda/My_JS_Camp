// PROTOTYPES IN JS

// a js object is an entity having state and behaviour (properties and methods).

// JS OBJECTS have a special property called prototype. [like to string , toLocalestring] ---reference to an object

// we use set prototype using __proto__

// if Object and prototype have same method , objects method will be used . 


const student = {
    fullName : "dhanyashre L",
    marks : 93.16,
    printMarks : function () {
        console.log("marks =", this.marks);     
        // student.marks

    }, 
}

// this --> if we use in object means were showing it belongs to object created, for example in above its 

const employee = {
    calcTax1 () {
        console.log("tax rate is 10%");
    },
    calcTax2 : function () {
        console.log("tax is 20%");
        
    }
}

const karanArjun = {
    salary : 50000,
}
karanArjun.__proto__ = employee;

// CLASSES IN JS

// Class is a program code template for creating objects.

// Those objects will have some state (variables) and some behaviour (funtions) inside it .

// class MyClass {
//     constructor() {}
//     myMethod () {}
// }
// let myObj = new MyClass() ;

class ToyotaCar {
    constructor() {
        console.log("creating new object");      
    }
    start() {
        console.log("start");
        
    }

    stop() {
        console.log("stop");
        
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner1")
let lexus = new ToyotaCar();

// constructor () method : automatically invoked by new , initializes object.









