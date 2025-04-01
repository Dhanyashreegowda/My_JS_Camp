// Immediately Invoked Function Expressions (IIFE)
// func which gets immeadiately executed , due to global scope polution to remove it 
// function chai(){
//     console.log('DB CONNECTED');
// }
// chai()

//() ()
(function chai(){
    console.log('DB CONNECTED');
}) ();   // ; neccessary to end it

( function aurcode (){
    //name IIFE
    console.log('Arrow IIfe')
}) ();


( (name) => {
    //SIMPLE IIFE
    console.log(`Arrow IIfe ${name} `)
}) ('dhanya')
