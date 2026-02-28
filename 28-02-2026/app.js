// // addEventListener

// var button = document.getElementById("btn");

// // function greet(){
// //     console.log('Hi !')
// // }

// // button.addEventListener('click', greet)

// // console.log(button)

// var heading = document.querySelector("h1");

// heading.addEventListener("mouseover", function () {
//   heading.style.backgroundColor = 'black'
// });
// // Animate heading color and scale on mouseover and mouseout

// heading.addEventListener("mouseover", function () {
//     heading.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
//     heading.style.backgroundColor = "black";
//     heading.style.color = "white";
//     heading.style.transform = "rotate(1deg)";
//     heading.style.letterSpacing = "4px";
//     heading.style.textShadow = "0 4px 20px rgba(0,0,0,0.4)";
// });


// heading.addEventListener("mouseout", function () {
//     heading.style.backgroundColor = "";
//     heading.style.color = "";
//     heading.style.transform = "";
//     heading.style.letterSpacing = "";
//     heading.style.textShadow = "";
// });


// console.log(heading);

// removeEventListener


// var todoConatiner = document.getElementById("todo-container");
// var addTodoButton = document.getElementById("add-todo-button");

// // addTodoButton.addEventListener('click', addTodo);

// addTodoButton.addEventListener('click', addTodo)



// function deleteTodo(event){
//     var todoItem = event.parentNode;
//     todoConatiner.removeChild(todoItem);
// }


// function editTodo(event){
//     var todoItem = event.parentNode;

//     var todoTextEle = todoItem.querySelector(".todo-text");

//      var todoInput = document.getElementById("todo-input");
//     var todoText = todoInput.value;

    
//     if(todoText === ""){
//         alert("Please enter a edited task");
//         return;
//     }

//     todoTextEle.innerText = todoText;

//      todoInput.value = "";

// }

// function addTodo(){
//     var todoInput = document.getElementById("todo-input");
//     var todoText = todoInput.value;


//     if(todoText === ""){
//         alert("Please enter a task");
//         return;
//     }



//     var newTodo = document.createElement("div");
//     newTodo.setAttribute("class", "todo-item");

//     var todoTextEle = document.createElement("p");
//     todoTextEle.setAttribute("class", "todo-text");
//     todoTextEle.innerText = todoText;

//     var deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute("class", "del-btn");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.addEventListener('click', function(){
//         deleteTodo(this);
//     })


//     var editBtn = document.createElement("button");
//     editBtn.setAttribute("class", "edit-btn");
//     editBtn.innerText = "Edit";

//     editBtn.addEventListener('click', function(){
//         editTodo(this)
//     })

//     newTodo.appendChild(todoTextEle);   
//     newTodo.appendChild(editBtn);
//     newTodo.appendChild(deleteBtn);

//     console.log(newTodo);

//     todoConatiner.appendChild(newTodo);

//     todoInput.value = "";    


// }

// addTodoButton.removeEventListener('click', addTodo)


// var persons = ["Ali", 24, "Developer", "Pakistan", "Waqar", 23, "Designer", "Afghanistan"]
var persons = [
    {
    name: "Ali",
    age: 24,
    role: "Developer",
    country: "Pakistan "
},

{
     name: "Waqar",
    age: 23,
    role: "Designer",
    country: "Afghanistan "
}

]


// for(var i =0; i< persons.length; i++){
//     console.log(`My name is ${persons[i]} and my age is ${persons[i] } and my profession is ${persons[i]} and i'm from ${persons[i]}`)
// }


for(var i =0; i< persons.length; i++){
    console.log(`My name is ${persons[i].name} and my age is ${persons[i].age } and my profession is ${persons[i].role} and i'm from ${persons[i].country}`)
}

