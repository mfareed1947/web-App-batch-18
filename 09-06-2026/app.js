// function x( num1, num2, ...args) {
//     console.log(num1)
//     console.log(num2)
//     for(const arg of args) {
//         console.log(arg)
//     }

//     console.log("-----------------------------")
// }

// const arr1 = [10, 20, 30, 40, 50, 60,]
// const arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, ]
// const arr3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]


// x(...arr1)
// x(...arr2)
// x(...arr3)



// const x = [1, 2, 3]
// const y = [4, 5, 6]

// const z = [...x, ...y]

// console.log(z)

// function a(x = 10, y = 20) {
//     console.log(x)
//     console.log(y)
// }

// a(40, 50)

// ENCHANCE OBJECT LITERAL


// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// const person1 = {
//     name: "Jane",
//     age: 25,
//     city: "Los Angeles"
// }

// const { name, age, city } = person
// const { name: name1, age: age1, city: city1 } = person1

// console.log(name)
// console.log(age)
// console.log(city)


// console.log(name1)
// console.log(age1)
// console.log(city1)



// EXPONENTIATION OPERATOR


// console.log(2 ** 3) // 2 * 2 * 2 = 8
// console.log(5 ** 4) // 5 * 5 * 5 * 5 = 625



// Ternary Operator


const x = false
const condition = false

// console.log(x ? "True" : "False")



condition ? (
    console.log("HI")
) : (
    console.log("BYE")
)

condition && (
    console.log("HI")
)