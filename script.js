function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const todoList = document.getElementById("todoList");

    const li = document.createElement("li");
    li.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
    taskInput.value = "";
}
