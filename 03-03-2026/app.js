// Unstructured Data 

// var persons = ["Ali", 24, "Developer", "Pakistan"];


// // Structured Data

// var person = {
//     name: "Ali", 
//     age : 24, 
//     role : "Developer", 
//     country : "Pakistan"
// };



// var persons = ["Ali", 24, "Developer", "Pakistan", "Ahmed", 30, "Designer", "India", "John", 28, "Manager", "USA"];


// for (var i = 0; i < persons.length; i++) {
//     console.log(`My name is ${persons[i]}, I am ${persons[i]} years old, I work as a ${persons[i]}, and I am from ${persons[ij]}.`);
// }



// var persons = [
//     {
//         name: "Ali",
//         age: 24,
//         role: "Developer",
//         country: "Pakistan"
//     },
//     {
//         name: "Ahmed",
//         age: 30,
//         role: "Designer",
//         country: "India"
//     },
//     {
//         name: "John",
//         age: 28,
//         role: "Manager",
//         country: "USA"
//     }
// ]


// console.log(persons[2].name)

// for (var i = 0; i < persons.length; i++) {
//     console.log(`My name is ${persons[i].name}, I am ${persons[i].age} years old, I work as a ${persons[i].role}, and I am from ${persons[i].country}.`);
// }





// var person = {
//     name: "Ali",
//     age: 24,
//     role: "Developer",
//     country: "Pakistan",
// }

// console.log(person);

// person.cnic = "12345-6789012-3";
// person.role = "Senior Developer";

// delete person.country;

// console.log(person);


var todos = [
    {
        id: 1,
        title: "Buy groceries",
        completed: false
    },
    
]

todos.push({
    id: 2,
    title: "Clean the house",
    completed: false
})

var todoContainer = document.getElementById("todo-container");

for (var i = 0; i < todos.length; i++) {
    var todoItem = document.createElement("div");
    var todoTitle = document.createElement("p");

    todoTitle.innerText = todos[i].title;
    todoItem.appendChild(todoTitle);
    todoContainer.appendChild(todoItem);
}


console.log(todos);