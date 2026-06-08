// Destructuring;

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",

//   timings: {
//     morning: "8:00 AM",
//     evening: "6:00 PM",
//   },
// };

// const { name, age, city, timings } = person;

// // const { morning, evening } = timings;

// // person.timings.morning; // Output: 8:00 AM

// console.log(name); // Output: John
// console.log(age);
// console.log(city); // Output: New York

// console.log(morning); // Output: 8:00 AM
// console.log(evening); // Output: 6:00 PM

// const person = ["John", 30, "New York", "Engineer"];

// const [n, , , p] = person;

// console.log(n);
// console.log(p);

function randomArgs(num1, num2, ...args) {
  console.log(num1);
  console.log(num2);
  console.log(args);
}

const numbersOne = [1, 2, 3, 4, 5];
const numbersTwo = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const numbersThree = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

randomArgs(...numbersOne);
randomArgs(...numbersTwo);
randomArgs(...numbersThree);


const a = [1, 2, 3];
const b = [4, 5, 6];

const combined = [...a, ...b];

console.log(combined) // Output: [1, 2, 3, 4, 5, 6]
console.log(...a)
console.log(...b)