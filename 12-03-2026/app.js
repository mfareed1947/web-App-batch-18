var persons = [
    {
        name: "Ali",
        age: 24,
        city: "Karachi",

        greet() {
            console.log("Hello, I am " + this.name);
        }
    },

    {
        name: "Waqar",
        age: 30,
        city: "Lahore",

        greet() {
            console.log("Hello, I am " + this.name);
        }
    },
    {
        name: "Sarim",
        age: 28,
        city: "Islamabad",

        greet() {
            console.log("Hello, I am " + this.name);
        }
    },
    {
        name: " Zain",
        age: 28,
        city: "Multan",

        greet() {
            console.log("Hello, I am " + this.name);
        }
    },
]

// New Keyword

// 1: Create an empty object
// 2 : Enable this `
// 3: Set this value an empty object
// 4 : Return this Object

function Persons(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;

    this.greet = function () {
        console.log("Hello, I am " + this.name);
    }
}

function displayPersons() {
    var peopleList = document.getElementById("people-list");
    peopleList.innerHTML = "";

    
    for (var i = 0; i < persons.length; i++) {
        var personCard = document.createElement("div");
        personCard.setAttribute("class", "single-people");

        var nameElement = document.createElement("h3");
        var ageElement = document.createElement("p");
        var cityElement = document.createElement("p");

        nameElement.innerText = "Name: " + persons[i].name;
        ageElement.innerText = "Age: " + persons[i].age;
        cityElement.innerText = "City: " + persons[i].city;
        
        personCard.appendChild(nameElement);
        personCard.appendChild(ageElement);
        personCard.appendChild(cityElement);

        peopleList.appendChild(personCard);


    }
}

function addPerson() {
    var nameInput = document.getElementById("name").value;
    var ageInput = document.getElementById("age").value;
    var cityInput = document.getElementById("city").value;

    var newPerson = new Persons(nameInput, ageInput, cityInput);
    persons.push(newPerson);

    displayPersons()

}


displayPersons();

// var person1 = new Persons("Kashif", 24, "Karachi");
// var person2 = new Persons("Ahmed", 20, "Karachi");

// persons.push(person1);
// persons.push(person2);


//!TASK 

// Create a simple form get three values user name, age and city
// Get the values from user in input fields and create a new object using constructor function and add it to the persons array
// Display the updated persons array in Browser as a Card UI with name, age and city of each person. 
// Use Document Object Model (DOM) to create and manipulate HTML elements dynamically based on the data in the persons array.



// for (var i = 0; i < persons.length; i++) {
//     console.log(`My name is ${persons[i].name}, I am ${persons[i].age} years old and I live in ${persons[i].city}.`);
// }






// console.log(persons);



// var userInfo = {
//     name: "Ali",
//     age: 24,
//     city: "Karachi",
// }

// // console.log(userInfo.name)
// // console.log(userInfo['age'])


// // for(var k in userInfo){
// //     console.log(k + ": " + userInfo[k]);
// // }

// // for(var value of Object.values(userInfo)){
// //     console.log(value);
// // }

// var fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// // for(var i = 0; i < fruits.length; i++){
// //     console.log(fruits[i]);
// // }

// for(var fruit of fruits){
//     console.log(fruit);
// }