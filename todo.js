const buttonEl = document.querySelector("#button");
const todoList = document.querySelector("#todo_list");

function addTodo() {
    const li = document.createElement("li");
    let inputValue = document.querySelector(".input").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(deleteBtn);

    // Cheack input validation
    if (inputValue === "") {
        alert("Please enter a valid value");
    } else {
        todoList.appendChild(li);
    }
    console.log(inputValue);
    document.querySelector("input").value = "";
}

buttonEl.addEventListener("click", addTodo);