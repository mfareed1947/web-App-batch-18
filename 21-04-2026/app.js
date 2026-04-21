// Execution Context 
// Call Stack
// Hoisting
// Temporal Dead zone
// VAR/ LET / CONST
// Scope (Global, Funtion, Block)
// Block Shadowing 
// Scope Chain
// Lexical Environment
// CLOSURES 



// console.log(a)
// let a = 10


// let a = 10

// {
//     let a = 20
//     console.log(a);
//     {
//         // let a = 30
//         console.log(a)
//     }
// }

// console.log(a);


// function x(){

// function y(){
//     var a = 10
//     console.log(a)
// }

// y()
// }

// x()




// CLOSURE 

// When the current execution context moved to it's lexical parent the closure is created !

// A function along with it's lexical parent is called closure !




// function outer() {
//     var a = 10;

//     function inner() {
//         var b = 20


//         function subInner() {
//             console.log(a + b)

//         }

//         subInner()
//     }

//     inner()

// }

// outer()




// function x(){
    
// }


function x(){
    for(var i = 1; i <= 5; i++ ){
        setTimeout(function(){
            console.log(i)
        }, 1000)
    }

    console.log("Hello World !")
}

x()