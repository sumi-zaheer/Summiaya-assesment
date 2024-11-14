const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const error = document.getElementById("error");

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    error.classList.remove("hidden");
    return;
  }
  error.classList.add("hidden");

  const listItem = document.createElement("li");
  listItem.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "p-2",
    "bg-gray-100",
    "rounded"
  );

  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("text-blue-500", "mr-2");
  editButton.onclick = () => editTask(taskLabel);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("text-red-500");
  deleteButton.onclick = () => taskList.removeChild(listItem);

  listItem.appendChild(taskLabel);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);
  taskInput.value = "";
}

function editTask(taskLabel) {
  const newTaskText = prompt("Edit task:", taskLabel.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskLabel.textContent = newTaskText.trim();
  }
}

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTask();
});
