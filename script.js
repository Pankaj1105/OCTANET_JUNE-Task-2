function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  }

  var taskItem = document.createElement("li");
  taskItem.innerHTML =
    taskInput.value + '<span onclick="removeTask(this)">X</span>';
  taskList.appendChild(taskItem);

  taskInput.value = "";
}

function removeTask(task) {
  var listItem = task.parentElement;
  listItem.parentNode.removeChild(listItem);
}
