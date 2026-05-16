// tests/helpers/taskHelpers.js

async function addTask(page, taskText) {
  await page.getByTestId('task-input').fill(taskText);
  await page.getByTestId('add-task-btn').click();
}

module.exports = { addTask };