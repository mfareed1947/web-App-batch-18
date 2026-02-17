// const target = document.childNodes[1].childNodes[0]


// console.log(target.nodeType)


var todoList = document.getElementById('todo_list');

function addTodo(){
    var inputValue = document.getElementById('todo_input');

    if(inputValue.value === ''){
        alert('Please enter a todo item');
        return;
    }

    var todoItem = `<div class="todo_item">
            <p>${inputValue.value}</p>

            <button id="delete_todo_btn" onclick="deleteTodo(this)">Delete</button>
            <button id="edit_todo_btn" onclick="editTodo(this)">Edit</button>
        </div>`

    todoList.innerHTML += todoItem;
    // inputValue.value = '';
    


}