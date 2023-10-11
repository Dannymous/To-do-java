// Function to add a new task with date and time
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");

    // Get the current date and time
    const now = new Date();
    const dateStr = now.toLocaleDateString();
    const timeStr = now.toLocaleTimeString();

    li.innerHTML = `
      <span>${taskText}</span> <br/><hr/>
      <span class="datetime">${dateStr} ${timeStr}</span>
      &nbsp;
      <button onclick="editTask(this)">Edit</button>
      &nbsp;
      <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Function to edit a task
function editTask(button) {
  const li = button.parentElement;
  const taskText = li.querySelector("span");
  const newTaskText = prompt("Edit task:", taskText.textContent);

  if (newTaskText !== null) {
    taskText.textContent = newTaskText;
  }
}

// Function to delete a task
function deleteTask(button) {
  const li = button.parentElement;
  const taskList = document.getElementById("taskList");
  taskList.removeChild(li);
}

const output = document.getElementById("output");
const erro = document.getElementById("erro");
const btn = document.getElementsByClassName(".btn");

let usser = JSON.parse(localStorage.getItem("newUser"));
output.innerHTML = usser.myEmail;

//
