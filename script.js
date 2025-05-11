function addTodo() {
    const input = document.getElementById("todo-input");
    const task = input.value.trim();

    if (task === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }