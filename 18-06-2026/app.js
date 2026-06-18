class Person {
    constructor(name, age, profession) {
        this.name = name;

        // this = {
        //     name : name
        // }

        this.age = age;

        // this = {
        //     name : name
        //     age: age
        // }
        this.profession = profession

        // this = {
        //     name : name
        //     age: age
        //     profession : profession
        // }


        // return this
    }

    greet() {
        return `Hello my name is ${this.name} & my age is ${this.age} my profession is ${this.profession}`
    }
}

const personInstance = new Person("Ali", 24, "Software Engineer")
const personInstance1 = new Person("Hamza", 26, "Software Engineer")

// console.log(personInstance.greet())
// console.log(personInstance)


// console.log(personInstance1.greet())
// console.log(personInstance1)




// class Employee extends Person {
//     constructor(name, age, profession, employeeId) {
//         super(name, age, profession)
//         this.employeeId = employeeId
//     }

//     greet(){
//         return `Hello my name is ${this.name} & my age is ${this.age} my profession is ${this.profession} and my employeeID is ${this.employeeId}`
//     }
// }

// const EmployeeInstance = new Employee("Ashar", 14, "Software Developer", 123)

// console.log(EmployeeInstance.greet())
// // console.log(EmployeeInstance.greetEmployee())

// console.log(EmployeeInstance)

// console.log(personInstance.greet())


class BankAccount {
  // Private property
    #balance = 0; 

  constructor(owner) {
    this.owner = owner; // Public property
  }

  // Public method to deposit money safely
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  // Public getter to safely read the private value
    balance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alice");
account.deposit(500);



console.log(account.balance()); // Output: 500


console.log(account.#balance)



// Abstraction 
// GETTER / SETTER