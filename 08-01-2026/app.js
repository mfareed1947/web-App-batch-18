// alert("Hello World !")

// var person = "Ali";
// var person1 = "Waqar"

var persons = ["Ali", "Waqar", "Hamza", "Bilal", "Aneeq", "Kashif"]

// console.log(persons[persons.length -1])
// console.log(persons.length);

// persons[6] = 'Ahsan'

// persons[0] = "Ali Aftab"

// console.log(persons)

//! To remove last element 

// var removeElement = persons.pop()
// console.log(removeElement);


// To add one or more element in the last of an array 

// persons.push("Faiq", "Waleed", "Aman")


// To remove first element from Array 

// persons.shift()
// console.log(persons);


// To add one or more element in the start of an array 

// persons.unshift("Faiq", "Waleed", "Aman")
// console.log(persons);

// SPLICE


// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.



persons.splice(2, 0,  "Waleed", "Zubair", "Kashif")

console.log(persons);
