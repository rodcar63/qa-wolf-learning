function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value;

  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  li.onclick = () => li.remove();

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
