// ASYNC/ AWAIT


// async function greet(){
//     return "Hello World !"
// }

// greet().then((data)=> console.log(data))


// let todoApi = "https://jsonplaceholder.typicode.com/todos/1"

// function getTodo(API){
//     const todo = fetch(API)

//     return todo.then((response) => response.json())
// }

// getTodo(todoApi).then((data) => console.log(data))

// let todoApi = "https://jsonplaceholder.typicode.com/todos/1"

// async function getTodo(API){
//     const todo = await fetch(API)

//     const todoData = await todo.json()

//     return todoData
// }
// getTodo(todoApi).then((data) => console.log(data))

// Create our own promise

const p1 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve("Promise Resolved")
        }, 5000);
    } else {
        setTimeout(() => {
            reject("Promise Rejected")
        }, 5000);
    }
})
// console.log(p1)
// p1.then((data) =>{
//     console.log(
//         "Success : " + data
//     )
// }).catch((err) => {
//     console.log(
//         "Error : " + err
//     )
// })

// console.log("Hello World !")

async function getPromise() {
    try {
        console.log("Fetching Promise...")
        const data = await p1
        console.log(data)
    } catch (error) {
        console.log("Error : " + error)
    }
}   

getPromise()

console.log("Hello World !")