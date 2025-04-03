// console.log("hello");
// alert("apna xlg")
// console.log(window)

// window.console.log("hello")

// window object represents an  open window in a broswer.
// its a browsers object (not JS) and is automatically created by browser



// when a web page is loaded ,the browser creates a DOM of the page


// console.log --> print
// console.dir --> docs --> property and methods printing
// window --> document ---> modal {html}    // DOM ---> tree like structure

// each individual box is node , node is object

// console.dir(window.document);
// console.dir(document);
// console.dir(document.body.childNodes[1]);
// document.body.style.background = "pink"

// console.log(document.body.childNodes)
// document.body.childNodes[3].innerText = "abcd";  // dynamic changes , 

// DOM MANIPULATION  - Id, className , TagName , querySelector ,

// Selecting with id
// let heading = document.getElementById("heading"); // h1
// console.log(heading);

let headingsss = document.getElementsByClassName("heading-class");  // returns html collection similar to array not exactly same
// console.dir(headingsss);
// console.log(headingsss);

let parahs = document.getElementsByTagName("p");
// console.log(parahs);

// QUERY SELECTOR

// document.querySelector("myId/myClass/tag")
// // returns first Element

// document.querySelectorAll("myId / myClass /tag")
// //returns a NodeList

// let elements = document.querySelector("p"); //first element
// console.dir(elements);

// let elements1 = document.querySelectorAll("p");  // all elements
// console.dir(elements1);


// for clasName have to put .
// let elements = document.querySelector(".myClass"); //first element
// console.dir(elements);

// let elements1 = document.querySelectorAll(".myClass");
// console.dir(elements1);

let elements = document.querySelector("#myId"); //first element
// console.dir(elements);

// PROPERTIES -get , set
// tagName : returns tag for element nodes
// innerText : returns (string)the text content of the elements and all its chidlren --no html content like p , i , ul , li
// innerHTML : returns (string)the plain text or HTML contents in the element
// textContent : returns textual content even for hidden elements



let heading = document.querySelector("h1");

// console.dir(heading.innerText)
// heading.innerText = heading.innerText + "new heading";
// heading.innerHTML = "<i>new heading</i>"


let divsss = document.querySelectorAll(".box");
// let index = 1;
// for (div of divsss){
//     div.innerText = `new unique value is ${index}`;
//     index++;
// }


// divsss[0].innerText = "new uniquw value 1";
// divsss[1].innerText = "new uniquw value 2";
// divsss[2].innerText = "new uniquw value 3";
// divsss[3].innerText = "new uniquw value 4";
// divsss[4].innerText = "new uniquw value 4";

//ATTRIBUTES

// getAttribute(attr)  // to get the attribute value
// setAttribute(attr , value) // to set the attribute val th


// // STYLE

// Node.style


// INSERT ELEMENTS

// let el = document.createElement("div")

// --> node.append(el) // adds at the end of node (inside)
// --> node.prepend(el) // adds at the start of node (inside)
// --> node.before(el) // adds before node (outside)
// --> node.after(el) // adds after the node (outside)



// DElETE

// --> node.remove()  // remove s the node




















