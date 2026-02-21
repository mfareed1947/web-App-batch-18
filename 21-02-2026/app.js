// var container = document.getElementById("container");

// var para = document.createElement('p');

// para.innerText = "Lorem ipsum dolor 4";


// // container.insertBefore(para, container.childNodes[3 ]);

// // container.appendChild(para);
// container.removeChild(container.childNodes[1]);

// console.log(container.childNodes)



// ================ TODO APPLICATION ===================

var todoList = document.getElementById("todo-list");

function addTodo() {
  
  var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;

    if(todoText === ''){
        alert("Please enter a todo");
        return;
    }

    var todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todo-item");

    var todoTextEle = document.createElement("p");
    todoTextEle.setAttribute("class", "todo-text");
    todoTextEle.innerText = todoText;

    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.innerText = "Edit";
    editBtn.setAttribute("onclick", "editTodo(this)");

    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("onclick", "deleteTodo(this)");


    todoItem.appendChild(todoTextEle);
    todoItem.appendChild(editBtn);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);

    todoInput.value = '';

}

function deleteTodo(event) {
    var todoItem = event.parentNode;
    todoList.removeChild(todoItem);

}

function editTodo(event) {
    var todoItem = event.parentNode;

    var todoTextEle = todoItem.querySelector(".todo-text");

      
  var todoInput = document.getElementById("todo-input");
    var todoText = todoInput.value;

    if(todoText === ''){
        alert("Please enter a todo");
        return;
    }

    todoTextEle.innerText = todoText;
    todoInput.value = '';


}