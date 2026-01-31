// function definition/statement
// var sum = 10;

// function a(num) {
//   var sum = num;
//   console.log("A");
// //   console.log("Inner fuction", sum);

//   function b(){
//     console.log("B");

//     console.log(sum)
//   }

//   b()

//   return sum;
//   console.log("After return statement")
// }

// // function calling/invokation

// var result = a(10);
// var result1 = a(20);
// console.log("Outer function", result);
// console.log("Outer function", result1);

// var theSum = 1000;
function addNumbers(num1, num2) {
    var theSum = num1 + num2;

    console.log(theSum)
}

addNumbers(10, 10);
addNumbers(20, 40);

// console.log(theSum)