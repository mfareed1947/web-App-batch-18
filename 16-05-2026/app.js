// const arr = [1, 3, 4, 6, 7]
const num = [1, 2, 3, 4, 5];
// const fruits = ["Mango", "Apple", "Orange"]

// MAP / FOR EACH

const teamMembers = [
  {
    name: "Alex Morgan",
    age: 18,
    profession: "Software Engineer",
  },
  {
    name: "brian chen",
    age: 34,
    profession: "Data Analyst",
  },
  {
    name: "Elena Rostova",
    age: 41,
    profession: "Project Manager",
  },
  {
    name: "Marcus Vance",
    age: 15,
    profession: "UX/UI Designer",
  },
  {
    name: "Aisha Diop",
    age: 31,
    profession: "DevOps Engineer",
  },
];

//   const extractName = teamMembers.map((item , index)=>{
//     return item.name
//   })

// const names = []
// teamMembers.forEach((item , index)=>{
//    names.push(item.name)
//   })

// console.log(names)

// console.log(extractName)

// function callback(x){
//   console.log(x * 2 )
// }

// const doubled = arr.map(callback)
// console.log(doubled)

// console.log(arr)

// for(let i = 0; i < num.length; i++){
//     console.log(num[i])
// }

// console.log('-----------------------------')

// num.forEach((item, index)=>{
//     console.log(index, item)
// })

// fruits.forEach((item, index)=>{
//     console.log(item, index)
// })

// console.log(fruits)

// FILTER / REDUCE

// const filteredMembers = teamMembers.filter((curr)=>{
//     return curr.age > 35
// })

// console.log(filteredMembers)

// const evenNum = num.filter((curr) => {
//     return curr % 2 === 0
// })
// const OddNum = num.filter((curr) => {
//     return curr % 2 !== 0
// })

// console.log(evenNum)
// console.log(OddNum)

// REDUCE

// let sum = 0
// for(let i = 0; i < num.length; i++){
//     sum += num[i]
// }

// console.log(sum)

// const total = num.reduce((acc, curr)=>{
//     return acc + curr
// }, 0)

// console.log(total)

const cart = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 200,
    quantity: 5,
  },

  {
    id: 2,
    name: "Shirts",
    price: 100,
    quantity: 3,
  },

  {
    id: 3,
    name: "Pants",
    price: 150,
    quantity: 7,
  },
  {
    id: 4,
    name: "Pants",
    price: 175,
    quantity: 9,
  },
];

const cart1 = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 200,
      quantity: 5,
    },
  
    {
      id: 2,
      name: "Shirts",
      price: 100,
      quantity: 3,
    },
  
    {
      id: 3,
      name: "Pants",
      price: 150,
      quantity: 7,
    },
   
  ];


  const cart2 = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 200,
      quantity: 5,
    },
  
    {
      id: 2,
      name: "Shirts",
      price: 100,
      quantity: 3,
    },
  
    {
      id: 3,
      name: "Pants",
      price: 150,
      quantity: 7,
    },
    {
      id: 4,
      name: "Pants",
      price: 175,
      quantity: 9,
    },
    {
      id: 5,
      name: "Pants",
      price: 275,
      quantity: 9,
    },
  ];


function addToCart(c){
    const total = c
    .map((item) => item.price * item.quantity)
    .reduce((sum, subtotal) => sum + subtotal, 0);

    return total
  
}

console.log(addToCart(cart))
console.log(addToCart(cart1))
console.log(addToCart(cart2))
