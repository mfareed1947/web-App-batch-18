// CLASS 

class Person {
    // name = "Ali";
    // age = 24
    // profession = "Engineer"

    constructor(name, age, profession){
        this.name = name;
        this.age = age;
        this.profession = profession
    }

    greeting(){
        return `Hello ${this.name}`
    }
}



// INHERITANCE 


class Employee extends Person{
    constructor(name, age, profession, employeeId){
        super(name, age, profession)
        this.employeeId = employeeId
    }
}

const e1 = new Employee("Ali", 24, "Engineer", "12345")
console.log(e1)


// const p1 = new Person(
//     "Ali", 24, "Engineer"
// )
// console.log(p1.greeting())



// const p2 = new Person("Hamza", 24, "Designer")
// console.log(p2.greeting())


// const p3 = new Person()
// console.log(p2)
// console.log(p3)



// HOME WORK 

// POLYMORPHISM 
// ABSTRACTION 
// ENCAPSULATION 