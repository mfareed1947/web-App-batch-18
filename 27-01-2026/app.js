// var num = "100.123asa1821818"

// // num = parseInt(num)
// num = parseFloat(num)

// console.log(typeof num)
// console.log(num.toFixed(2));

//! FUNCTIONS

// Functions is a block of code that's performs a specific task.

// for (let i = 0; i < 10; i++) {
//     console.log("Hello World");
// }

// function greet(name ,age) {
//     console.log(`Hello ${name}, you are ${age} years old`);
// }

// greet("Ali", 24);
// greet("Hasan", 29);
// greet("Wasil", 22);

// var guestList = ["Ali",24,"Hasan",29,"Wasil",22,"Ahmed",21];

var guestList = [
  {
    name: "Ali",
    age: 24,
  },

  {
    name: "Hasan",
    age: 29,
  },

  {
    name: "Wasil",
    age: 22,
  },

  {
    name: "Ahmed",
    age: 21
  },
];

function greet(name, age) {
  console.log(`Hello ${name}, you are ${age} years old`);
}

for (let i = 0; i < guestList.length; i++) {

    greet(guestList[i].name, guestList[i].age)

}
