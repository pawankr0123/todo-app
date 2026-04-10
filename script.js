function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") return;

  let li = document.createElement("li");
  li.innerText = task;

  li.onclick = function () {
    li.classList.toggle("completed");
  };

  let delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
