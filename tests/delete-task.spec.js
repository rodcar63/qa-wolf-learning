// tests/delete-task.spec.js
const { test, expect } = require('@playwright/test');
const { TaskPage } = require('./pages/taskPage');

test('should delete a task', async ({ page }) => {

  const taskPage = new TaskPage(page);

  await taskPage.goto();

  await taskPage.addTask('Task to delete');

  await taskPage.deleteFirstTask();

  await expect(taskPage.tasks).toHaveCount(0);
});