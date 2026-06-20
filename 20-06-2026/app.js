class Person{
    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        this.profession = profession
    }

    greeting(){
        console.log(`Hi ${this.name} your age is ${this.age} and your profession is ${this.profession}`)
    }
}

const p1 = new Person("Ali", 24, "Software Engineer")
// console.log(p1)

// const p2 = new Person("Kashan", 27, "Ship Engineer")
// console.log(p2)


// p1.greeting()
// p2.greeting()


// class Employee extends Person{
//     constructor(name, age, profession, employeeId){
//         super(name, age, profession)
//         this.employeeId = employeeId
//     }


//     greeting(){
//         console.log(`Hi ${this.name} your age is ${this.age} and your profession is ${this.profession} and your employeeId is ${this.employeeId}`)
//     }
// }

// const e1 = new Employee("Ashar", 14, "Software Developer", 123)
// console.log(e1)

// e1.greeting()


// p1.greeting()




class BankAccount {
  #balance = 0; // Private property

  constructor(owner) {
    this.owner = owner; // Public property
  }

  // Public method to modify private data safely
  set balance (amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  get balance(){
    return this.#balance
  }


  
}

const account = new BankAccount("Alice");

console.log(account.owner)

// account.deposit(500)
account.balance = 499
// account.balance()   
console.log(account.balance)