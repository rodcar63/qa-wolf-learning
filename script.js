function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const li = document.createElement('li');
  li.setAttribute('data-testid', 'task-item');

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;
  taskTextSpan.setAttribute('data-testid', 'task-text');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.setAttribute('data-testid', 'delete-task-btn');

  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(taskTextSpan);
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}