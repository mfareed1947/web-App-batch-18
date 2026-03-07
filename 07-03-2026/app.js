var persons = [
  {
    name: "Ali",
    age: 24,
    profession: "Developer",

    greeting() {
      return `Hello ${this.name}`;
    },

  },
  {
    name: "Umair",
    age: 24,
    profession: "Junior Developer",

    greeting() {
      return `Hello ${this.name}`;
    },
  },
  {
    name: "Hasan",
    age: 24,
    profession: "Intern Developer",

    greeting() {
      return `Hello ${this.name}`;
    },
  },
  {
    name: "Faizan",
    age: 24,
    profession: "Student",

    greeting() {
      return `Hello ${this.name}`;
    },
  },
];

// for(var i = 0; i < persons.length; i++){
//     console.log(persons[i].greeting())
// }



// 1: Create Empty Object 
// 2 : Enable this 
// 3 : Set *this* value to empty object
// 4 : Return the object 


function Persons (name, age, profession){

    //this = {}


    this.name = name;

    //this = {
    // name : "Ali"
    // }
    this.age = age;

    //this = {
    // name : "Ali",
    // age: 24,
    // }
    this.profession = profession;

    //this = {
    // name : "Ali",
    // age: 24,
    // profession: "Developer"
    // }

    this.greeting = function(){
        console.log(`Hello ${name}`)
    }
}


var person1 = new Persons("Ali", 24, "Developer")
var person2 = new Persons("Sumair", 26, "Developer")

console.log(person1)
person1.greeting()

// persons.push(person1)
// persons.push(person2)


// for(var i = 0; i < persons.length; i++){
//     console.log(persons[i].name)
// }




