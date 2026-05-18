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
    saveTasks();
  };

  li.appendChild(taskTextSpan);
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);

  taskinput.value = '';
  
  // Save to localStorage
  saveTasks();

}

/* connect button click to the function */
document
  .querySelector('[data-testid="add-task-btn"]')
  .addEventListener('click', addTask);

/* allow adding task with Enter key */
document
  .getElementById('taskInput')
  .addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  function saveTasks() {
  const tasks = [];

document.querySelectorAll('[data-testid="task-item"]').forEach((task) => {
  const text = task.querySelector('[data-testid="task-text"]').textContent;
  tasks.push(text);
});

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.forEach((taskText) => {
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
      saveTasks();
    };

    li.appendChild(taskTextSpan);
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);
  });
}
window.addEventListener('load', loadTasks);
