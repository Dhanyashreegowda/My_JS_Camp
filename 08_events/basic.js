// events -->changes in state of an Object
// MouseEvent(click , double click ,etc)
// KeyboardEvent(keypress , keyup , keydown ,etc)
// formevent (submit , etc) 
// print event and many more 

// onclick , ondblclick , onmouseover

// EVENT HANDLING IN JS

// node.event = () => {
//     //handle here
// }

// let button1 = document.querySelector("#btn1");
// console.log(button1);

// button1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
    
// };

// more than inline js event is priotrised  and in js last code is priotizes too , since old one are overrided

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("youre inside div");
    
// }

// EVENT OBJECT -->
// e.target, e.type , e.clientX , e.clientY
// node.event = (e) => {
//     //handle here
// }

// let button1 = document.querySelector("#btn1");
// button1.onclick = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX , e.clientY);
    
// }

//EVENT LISTENERS 

// node.addEventListener (event, callback)
// node.removeEventListener(event, callback) 

// NOTE: the callback reference should be same to remove 

// let button1 = document.querySelector("#btn1");

// button1.addEventListener("click", () => {
//     console.log("button1 was clicked --handler 1");
    
// })

// button1.addEventListener("click", () => {
//     console.log("button1 was clicked ---handler 2");
    
// })


// const handle3 = () => {
//     console.log("button1 was clicked ---handler 3");
// }
// button1.addEventListener("click",handle3)


// button1.addEventListener("click", () => {
//     console.log("button1 was clicked ---handler 4");
    
// })

// // button1.removeEventListener("click", () => {
// //     console.log("button1 was clicked ---handler 4");
  
// // })
// button1.removeEventListener("click",handle3)

let modebutton = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body") 

modebutton.addEventListener("click" , () => {
    console.log("youre trying change mode")
    // if(currmode === "light" ) {
    //     currmode = "dark";
    //     document.querySelector("body").style.backgroundColor = "black"
    // } else {
    //     currmode = "light";
    //     document.querySelector("body").style.backgroundColor = "white"
    // }
    // console.log(currmode)
    if(currmode === "light" ) {
        currmode = "dark";
        body.classList.add("dark")
    } else {
        currmode = "light";
        body.classList.add("light")
    }
    console.log(currmode)
})

