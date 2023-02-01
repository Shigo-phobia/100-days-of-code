const taskInput = document.querySelector("#task");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", function() {
  const task = taskInput.value;
  if (!task) return;

  const taskItem = document.createElement("li");
  taskItem.textContent = task;
  taskList.appendChild(taskItem);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  taskItem.appendChild(removeButton);

  removeButton.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  });

  taskItem.addEventListener("click", function() {
    taskItem.classList.toggle("completed");
  });

  taskInput.value = "";
});