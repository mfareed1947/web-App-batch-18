// CALLBACK HELL
// PROMISE CHAINING
// ASYNC AWAIT

/////// PROMISE STATE :

// PENDING
// FULFILLED
// REJECTED

const todoApi = "https://jsonplaceholder.typicode.com/todos/1";
const todoApi2 = "https://jsonplaceholder.typicode.com/todos/2";
const todoApi3 = "https://jsonplaceholder.typicode.com/todos/3";

function fetchAPI(API) {
  const todos = fetch(API);
    

 return todos.then((response) => {
      if (response.ok) {
        return response.json();
      }
    }).catch((error) => {    
          console.log(error);
    });
    
}

fetchAPI(todoApi).then((data) => {
    
    console.log(data);
});

fetchAPI(todoApi2).then((data) => {
    console.log(data);
});

fetchAPI(todoApi3).then((data) => {
    console.log(data);
});

//     const todos = fetch(todoApi)
// console.log(todos);

// function x() {
//   let a = 10;
// }

// let a = 20;
// x();

// console.log(a);









