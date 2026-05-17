const { test, expect } = require('@playwright/test');
const { TaskPage } = require('./pages/taskPage');

test('should not add empty task', async ({ page }) => {
  const taskPage = new TaskPage(page);

  await taskPage.goto();

  await taskPage.addTask('');

  await expect(taskPage.tasks).toHaveCount(0);
});

test('should add multiple tasks', async ({ page }) => {
  const taskPage = new TaskPage(page);

  await taskPage.goto();

  await taskPage.addTask('Buy milk');
  await taskPage.addTask('Walk dog');
  await taskPage.addTask('Learn Playwright');

  await expect(taskPage.tasks).toHaveCount(3);
});

test('deleting a task reduces the count', async ({ page }) => {
  const taskPage = new TaskPage(page);

  await taskPage.goto();

  await taskPage.addTask('Task 1');
  await taskPage.addTask('Task 2');

  await expect(taskPage.tasks).toHaveCount(2);

  await taskPage.deleteFirstTask();

  await expect(taskPage.tasks).toHaveCount(1);
});