[
    {
        name: "Ali",
        age: 30,
        city: "Karachi"
    },
    {
        name: "Ahmed",
        age: 25,
        city: "Lahore"
    },
    {
        name: "Sana",
        age: 28,
        city: "Islamabad"
    }
]

// Create Empty object   -- {}
// Enable this --  this
// Set this value a empty object -- this = {}
// Return this `object`



// function Persons (name, age, city) {
//     // this = {}

//     this.name = name;
//     this.age = age;
//     this.city = city;

//     this.greet = function(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`);
//     }

// }


// var person2 = new Persons("Ali", 30, "Karachi");


// console.log(person2);

// person1.greet();



// OOP -- Object Oriented Programming

// Class - Blueprint for creating objects


// Create Empty object   -- {}
// Enable this --  this
// Set this value a empty object -- this = {}
// Return this `object`
// Call the constructor function -- constructor()

// OOP pillars

// Polymorphism
// Inheritance
// Abstraction
// Encapsulation

// PIAE


// class Person {
//     constructor(name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}.`;
//     }
// }

// var person1 = new Person("Ali", 30, "Karachi");
// console.log(person1.greet());

var person = {
    name: "Ali",
    age: 30,
    city: "Karachi",
}

// console.log(person.name);
// console.log(person['age']);


// for( var key in person){
//     console.log(key + ": " + person[key]);
// }

console.log(Object.values(person));
console.log(Object.keys(person));

// for(var value of Object.values(person)){
//     console.log(value);
// }

var fruits = ["Apple", "Banana", "Cherry"];

for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log("-------------------");

for(var fruit of fruits){
    console.log(fruit);
}