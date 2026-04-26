// CLOSURE

// A function along with it's lexical parent forms a closure

// function outer(){
//     let a = 10

//     return function inner(){
//         console.log(a)
//     }
// }

// let z = outer()()
// // console.log(z)

// function a(num1) {
//   console.log("A EXECUTED ");
//   function b(num2) {
//     console.log("B EXECUTED ");

//     function c() {
//       console.log("C EXECUTED ");

//       console.log(num1 + num2);
//     }

//     c();
//   }
//   b(20);
// }

// a(10);

// console.log("By chippa man")

// setInterval(function () {
//   setTimeout(function () {
//     console.log("Hello Chippa man !");
//   }, 4000);
// }, 1000);

// function outer() {
//   for (var i = 1; i <= 5; i++) {
//     function close(iter) {
//       setTimeout(function () {
//         console.log(iter);
//       }, 1000 * iter);
//     }

//     close(i)
//   }

//   console.log("Hello World");
// }

// outer();


// function counter(){
//     let count = 0

//     return function(){
//         count++
//         return count
//     }
// }

// let countNum = counter()

// setInterval(function(){
//     console.log(countNum());
// }, 0.1)
