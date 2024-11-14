Here’s a simple to-do list application using HTML, CSS (with TailwindCSS), and JavaScript. This setup includes basic input validation and the ability to add, edit, and delete tasks. Here’s the code:

HTML and TailwindCSS Structure
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4 text-center">To-Do List</h1>
    <div class="mb-4">
      <input
        type="text"
        id="taskInput"
        class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new task"
      />
      <p id="error" class="text-red-500 text-sm hidden mt-1">Please enter a task</p>
    </div>
    <button
      onclick="addTask()"
      class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Add Task
    </button>
    <ul id="taskList" class="mt-4 space-y-2"></ul>
  </div>

  <script src="app.js"></script>
</body>
</html>


JavaScript Code (app.js):
javascript:
Copy code
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


Explanation of Key Elements:
HTML Structure: The HTML sets up the main structure, with an input field for new tasks, a button to add them, and an unordered list to display tasks.
JavaScript Functions:
addTask(): Adds a task to the list if the input is not empty.
editTask(): Allows users to edit an existing task using a prompt.
deleteButton.onclick: Deletes the task by removing it from the list.
Adding TailwindCSS for Styling
TailwindCSS classes are used to style each component:

bg-gray-100, p-6, rounded-lg for overall container styling.
w-full, p-2, border, etc., to style the input, button, and list items.
This should give you a functional to-do list app with a modern, clean UI and all required features!
