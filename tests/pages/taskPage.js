// tests/pages/taskPage.js

class TaskPage {
  constructor(page) {
    this.page = page;

    this.taskInput = page.getByTestId('task-input');
    this.addButton = page.getByTestId('add-task-btn');
    this.tasks = page.getByTestId('task-item');
    this.deleteButtons = page.getByTestId('delete-task-btn');
  }

async goto() {
  await this.page.goto('/');

//  console.log('CURRENT URL:', this.page.url());
//  console.log('PAGE CONTENT START:');
//  console.log(await this.page.content());
}

  async addTask(taskText) {
    await this.taskInput.fill(taskText);
    await this.addButton.click();
  }

  async deleteFirstTask() {
    await this.deleteButtons.first().click();
  }
}

module.exports = { TaskPage };