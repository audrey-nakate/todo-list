const taskText = document.getElementById('task-text');
const taskAlert = document.getElementById('alert');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('task-list');

let todo = JSON.parse(localStorage.getItem('todo-list')) || [];

function CreateToDoItem() {
    if (taskText.value === "") {
        taskAlert.textContent = "You must enter a task before pressing the add button!";
        // alert("You must enter a task before pressing the add button!");
        taskText.focus();
        return;
    } else {
        let isPresent = false;
        todo.forEach((element) => {
            if (element.item === taskText.value) {
                isPresent = true;
                return;
            }
        });

        if (isPresent) {
            taskAlert.textContent = "The task already exists";
            return;
        }
    
        let li = document.createElement('li');
    
        let todoItems = `<div title="double click to mark as complete" ondblclick="CompletedTasks(this);">${taskText.value}
                    <button title="edit" class="edit-task" onclick="EditTask(this);">#</button>
                    <button title="delete" class="delete-task" onclick="DeleteTask(this);">X</button></div>`;
    
        li.innerHTML = todoItems;
        taskList.appendChild(li);
    
        let task = { item: taskText.value , status: false };
        todo.push(task);
        localStorage.setItem("todo-list", JSON.stringify(todo))
    }

    taskText.value = "";
    taskAlert.textContent = "Task Added Successfully!";
}