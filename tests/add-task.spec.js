// tests/add-task.spec.js
const { test, expect } = require('@playwright/test');
const { TaskPage } = require('./pages/taskPage');

test('should add a task', async ({ page }) => {

  const taskPage = new TaskPage(page);

  await taskPage.goto();

  await taskPage.addTask('Buy milk');

  await expect(taskPage.tasks).toHaveCount(1);
  await expect(taskPage.tasks.first()).toContainText('Buy milk');
});
