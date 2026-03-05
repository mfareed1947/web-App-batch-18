// var persons = ["Ali", 24, "Engineer", "John", 30, "Doctor", "Sara", 28, "Teacher"];

// var persons = [
//     {
//         name: "Ali",
//         age: 24,
//         profession: "Engineer"
//     },
//     {
//         name: "John",
//         age: 30,
//         profession: "Doctor"
//     },

//     {
//         name: "Sara",
//         age: 28,
//         profession: "Teacher"
//     }
// ]



// var person = {
//     name: "Ali",
//     age: 24,
//     profession: "Engineer",

//     greet: function(){
//        return `Hello ${person.name}!`;
//     }
// }

// var person1 = {
//     name: "John",
//     age: 30,
//     profession: "Doctor",

//      greet: function(){
//        return `Hello ${person1.name}!`;
//     }
// }

// var person2 = {
//     name: "Hamza",
//     age: 28,
//     profession: "Teacher",

//      greet: function(){
//        return `Hello ${person2.name}!`;
//     }
// }

// console.log(person.greet());
// console.log(person1.greet());
// console.log(person2.greet());


// // Function Definition/ Statement 
// function abc(){

// }


// abc(); // Function Call/ Invocation/ Execution




// var persons = [
//     {
//         name: "Ali",
//         age: 24,
//         profession: "Engineer",

//          greet () {
//             return `Hello ${this.name}!`;
//         }
//     },
//     {
//         name: "John",
//         age: 30,
//         profession: "Doctor",
//         greet() {
//             return `Hello ${this.name}!`;
//         }
//     },

//     {
//         name: "Sara",
//         age: 28,
//         profession: "Teacher",
//         greet() {
//             return `Hello ${this.name}!`;
//         }
//     },
//     {
//         name: "Waqar",
//         age: 28,
//         profession: "Video Editor",
//         greet() {
//             return `Hello ${this.name}!`;
//         }
//     },
//     {
//         name: "Shayan",
//         age: 28,
//         profession: "AI Engineer",
//         greet () {
//             return `Hello ${this.name}!`;
//         }
//     },
// ]

// for (var i = 0; i < persons.length; i++) {
//     console.log(persons[i].greet());
// }


var person = {
    name: "Ali",
    age: 24,
    profession: "Engineer",

    hobbies: ["Coding", "Traveling", "Gaming"],

    jobTimings: {
        morning: {
            start: "9:00 AM",
            end: "5:00 PM"
        },
        evening: {
            start: "6:00 PM",
            end: "10:00 PM"
        }
    }
}

console.log(person.jobTimings.morning);
console.log(person.jobTimings.evening);