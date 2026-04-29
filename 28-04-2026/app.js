// Functions 

// Function Definition
// Function Statement
// Function Declaration
// Function Expression
// Named Function Expression
// Anonymous Function
// Arrow Function
// IIFE - Immediately Invoked Function Expression
// First Class Functions
// Function Parameters, Arguments
// Function Invocation
// Higher Order Functions
// Callback Functions


// Function Definition/ Statement/ Declaration

// console.log(x());
// console.log(y());



// function x(){
//     return "Hello World from x";
// }

// Function Invocation/ Call


// Function Expression

// let y = function(){
//     return "Hello World from y";
// }


// Function Expression with Name




// var x = function (){
//     // console.log("INNER", xyz);
//     return "Hello World from x";
// }
// console.log(x());


// IIFE - Immediately Invoked Function Expression

// (function (){
//     let a = 20
//     console.log("Database Connected");
// })();


// Anonymous Function

// function x(y) {
//     y();
//     console.log("Hello World from x");
// }

// x(function () {
//         console.log("Hello World from Anonymous Function");
// })


// Arrow Function


// console.log(x()); // Function Invocation/ Call


// var x = () => {
//   return "Hello World from Arrow Function";
// }

// function x() {
//   return "Hello World from Function Declaration";
// }

// let x = ()=> "Hello World from Arrow Function";

// console.log(x());

// Function Definition/ Statement/ Declaration
// function sum (a, b) {
//     return a + b;
// }

// Shortand for Arrow Function

// let sum = (a, b) => a + b;
// console.log(sum(10, 20));

// let greet = name =>`Hello ${name}`;

// console.log(greet("Fareed"));


// setTimeout(()=>{
//     console.log("Hello World from setTimeout");
// }, 2000);



// First Class Functions / First Class Citizens

function x(y) {
    y()
    return "Hello World from x";
}

console.log(x(function y() {
    console.log("Hello World from y");
}));
