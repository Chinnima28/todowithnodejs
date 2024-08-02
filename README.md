### To-Do List Application with Node.js

This project is a command-line based To-Do List application built with Node.js. It allows users to manage their tasks by adding new tasks, listing all tasks, marking tasks as complete, and deleting all tasks (resetting the list). 

#### Features:
- **Add Task:** Users can add a new task to the list.
- **List Tasks:** Displays all tasks with their completion status.
- **Complete Task:** Marks a specified task as completed.
- **Delete All Tasks:** Resets the task list by deleting all tasks.

#### Methods:
- **`loadTasks`:** Reads tasks from a JSON file.
- **`saveTasks`:** Saves tasks to a JSON file.
- **`addTask`:** Adds a new task to the list.
- **`listTasks`:** Lists all tasks with their status.
- **`completeTask`:** Marks a task as completed based on its index.
- **`deleteAllTasks`:** Deletes all tasks, resetting the task list.

The application uses the `fs` module for file operations, `path` module for handling file paths, and `readline` module for command-line interactions. Tasks are stored in a JSON file (`tasks.json`), ensuring data persistence between sessions. This project is ideal for beginners to understand basic file operations and command-line interactions in Node.js.
