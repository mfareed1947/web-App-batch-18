const todoAPI = 'https://jsonplaceholder.typicode.com/todos/1';


async function greet(API) {
    try {
        const response = await fetch(API)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }


    // response.then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //     return data;
    // })

}

// greet(todoAPI).then((data) => {
//     console.log(data);
// })

const p1 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve('Promise resolved for p1');
        }, 10000);
    } else {
        reject('Promise rejected for p1');
    }
})


const p2 = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve('Promise resolved for p2');
        }, 20000);
    } else {
        reject('Promise rejected for p2');
    }
})

async function handlePromise() {
    try {
        console.log("Hello World");
        const message = await p1;    

        console.log(message);

        const message2 = await p2;  
        console.log(message2);
    } catch (error) {
        return "Error: " + error;
    }
}

handlePromise()

console.log("This will be printed before the promise is resolved");

// p1.then((message) => {
//     console.log("Success: " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// })