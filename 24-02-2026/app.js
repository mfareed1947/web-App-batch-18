// CRUD 

// CREATE 
// UPDATE
// READ 
// DELETE



// document
// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll
// style
// innerHTML
// textContent
// childNodes
// appendChild
// removeChild
// nextElementSibling
// previousElementSibling
// parentNode
// hasAttribute
// setAttribute
// getAttribute
// createElement



// var todoContainer = document.getElementById("todo-container")

// var todoItem = `<div clas="todo-item"
//     <h3 class="todo-titleTodo Item 1</h3>
//     <p class="todo-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.</p>
// </div>`

// todoContainer.innerHTML += todoItem


var todoContainer = document.getElementById("todo-container")


function addTodo() {
    var todoInput = document.getElementById("todo-input")
    var todoText = todoInput.value;

    if(todoText === "") {
        alert("Please enter a todo")
        return;
    }

    var todoItem = document.createElement("div")
    todoItem.setAttribute("id", "todo-item")

    var todoTextEle = document.createElement("p")
    todoTextEle.setAttribute("class", "todo-text")
    todoTextEle.innerText = todoText

    var editBtn = document.createElement("button")
    editBtn.setAttribute("class", "edit-btn")
    editBtn.innerText = "Edit"
    editBtn.setAttribute("onclick", "editTodo(this)")

    var deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "delete-btn")
    deleteBtn.innerText = "Delete"
    deleteBtn.setAttribute("onclick", "deleteTodo(this)")

    todoItem.appendChild(todoTextEle)
    todoItem.appendChild(editBtn)
    todoItem.appendChild(deleteBtn)

    todoContainer.appendChild(todoItem)

    todoInput.value = ""
    
    console.log(todoItem)
}


function deleteTodo(e) {
   var todoItem = e.parentNode;

   todoContainer.removeChild(todoItem)
}

function editTodo(e) {
      var todoItem = e.parentNode;

      var todoTextEle = todoItem.querySelector(".todo-text")

    var todoInput = document.getElementById("todo-input")
    var todoText = todoInput.value;

        if(todoText === "") {
        alert("Please enter a edited todo")
        return;
    }


    todoTextEle.innerText = todoText

    todoInput.value = ""

}