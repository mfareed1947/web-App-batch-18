// alert("Hello World !")

// CLOSURES 

// Closure create when execution context move into his lexical parent 


// A clousre along with its lexical environment forms a closure.


// function outer() {
//     var a = 10

//     function inner() {
//         var b = 20

//         function innerMost() {
//             console.log(a + b)
//         }

//         innerMost()
//     }

//     inner()
// }

//  outer()


// setTimeout / setInterval


// setTimeout(function(){
//     console.log(
//         "Hello World"
//     )
// }, 2000)



// setInterval(function(){
//     console.log(
//         "Hello world from setInterval"
//     );

// }, 1000)


// function outer() {
//     for (var i = 1; i <= 5; i++) {

//         function close(i) {
//             setTimeout(function () {
//                 console.log(i)
//             }, 1000)
//         }

//         close(i)


//     }

//     console.log("Hello World !")
// }

// outer()


function counter(){
    let count = 0;

    return function(){
        count++;

        return count 
    }
}

let countNum = counter()

setInterval(function(){
    console.log(countNum())
}, 1000)