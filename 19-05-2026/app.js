// MAP 

// return a new array with the results of calling a provided function on every element in the calling array.
// Can't modify the original array 

// const numbers = [1, 2, 3, 4, 5];

// function double(x) {
//     return x * 2;
// }

// const doubleNumbers = numbers.map(double);
// console.log(doubleNumbers); // [2, 4, 6, 8, 10]


// const doubleNumbers = numbers.map((x) => {
//     return x * 2;
// });
// console.log(doubleNumbers); // [2, 4, 6, 8, 10]



// const doubleNumbers = numbers.map(x => x * 2);
// console.log(doubleNumbers); // [2, 4, 6, 8, 10]



const dummiData = [
    {
        id: 1,
        name: 'John Doe',
        age: 30,
        city: 'New York',
        profession: "Developer"
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 25,
        city: 'Los Angeles',
        profession: "Designer"
    },

    {
        id: 3,
        name: 'Jim Doe',
        age: 35,
        city: 'Chicago',
        profession: "Developer"
    },


]



// const names = dummiData.map((item, index) => item.name)
//     .forEach((item, index) => {
//         console.log(index, item)
//     });


// For Each 

// Can't return a new Array 


// const fruits = ["Apple", "Banana", "Mango"]

// fruits.forEach((item, index)=>{
//        console.log(item)
// })

// Filter


// const numbers = [1, 2, 3, 4, 5, 6, 7];


// const evenNumbers = numbers.filter((item) => {
//     return item % 2 === 0
// })


// const oddNumbers = numbers.filter((item) => {
//     return item % 2 !== 0
// })
// console.log(evenNumbers)
// console.log(oddNumbers)


// const filterByAge = dummiData.filter((item) => {
//     return item.age >= 30
// })

// const filterByName = dummiData.filter((item) => {
//     return item.name === "Jane Doe"
// })

// function filterData(profession) {
//     const filterByProfession = dummiData.filter((item) => {
//         return item.profession === profession
//     })

//     return filterByProfession
// }

// console.log("DEVS ============>" , filterData("Developer"))


// console.log("DESIGNER ============>", filterData("Designer"))



// console.log(filterByAge)
// console.log(filterByProfession)
// console.log(filterByName)



// REDUCE 

// const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue
// }, 0)

// console.log(total)


// ADD TO CART 

const cart = [
    { id: 1, product: 'Laptop', qty: 5, price: 2000 },
    { id: 2, product: 'Phone', qty: 10, price: 800 },
    { id: 3, product: 'Tablet', qty: 7, price: 600 },
    { id: 4, product: 'Monitor', qty: 4, price: 300 },
    { id: 5, product: 'Keyboard', qty: 12, price: 50 },
    { id: 6, product: 'Mouse', qty: 15, price: 30 },
    { id: 7, product: 'Headphones', qty: 8, price: 120 },
    { id: 8, product: 'Speaker', qty: 6, price: 150 },
    { id: 9, product: 'Camera', qty: 3, price: 900 },
    { id: 10, product: 'Printer', qty: 2, price: 250 }
]
const cart1 = [
    { id: 1, product: 'Laptop', qty: 5, price: 2000 },
    { id: 2, product: 'Phone', qty: 10, price: 800 },
    { id: 3, product: 'Tablet', qty: 7, price: 600 },
    { id: 4, product: 'Monitor', qty: 4, price: 300 },
    { id: 5, product: 'Keyboard', qty: 12, price: 50 },
    { id: 6, product: 'Mouse', qty: 15, price: 30 },
    
]
const cart2 = [
    { id: 1, product: 'Laptop', qty: 5, price: 2000 },
    { id: 2, product: 'Phone', qty: 10, price: 800 },
   
]


function addToCart(cart) {
    const total = cart.map((item) => item.price * item.qty).reduce((acc, curr) => acc + curr, 0)

    return total
}

console.log(addToCart(cart))
console.log(addToCart(cart1))
console.log(addToCart(cart2))