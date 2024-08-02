index.js

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Define the path to the tasks file
const filePath = path.join(__dirname, 'tasks.json');

// Load tasks from the JSON file
function loadTasks() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

// Save tasks to the JSON file
function saveTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Add a new task
function addTask(task) {
    const tasks = loadTasks();
    tasks.push({ task, completed: false });
    saveTasks(tasks);
    console.log(`Task added: "${task}"`);
}

// List all tasks
function listTasks() {
    const tasks = loadTasks();
    if (tasks.length === 0) {
        console.log('No tasks found.');
        return;
    }
    console.log('To-Do List:');
    tasks.forEach((t, index) => {
        console.log(`${index + 1}. ${t.task} [${t.completed ? 'Completed' : 'Pending'}]`);
    });
}

// Mark a task as completed
function completeTask(index) {
    const tasks = loadTasks();
    if (index < 1 || index > tasks.length) {
        console.log('Invalid task number.');
        return;
    }
    tasks[index - 1].completed = true;
    saveTasks(tasks);
    console.log(`Task ${index} marked as completed.`);
}

// Delete all tasks (reset)
function deleteAllTasks() {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    console.log('All tasks have been deleted.');
}

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
function promptUser() {
    rl.question('Enter command (add, list, complete, delete): ', (command) => {
        switch (command) {
            case 'add':
                rl.question('Enter the task description: ', (task) => {
                    addTask(task);
                    promptUser(); // Re-prompt after action
                });
                break;
            case 'list':
                listTasks();
                promptUser(); // Re-prompt after action
                break;
            case 'complete':
                rl.question('Enter the task number to complete: ', (index) => {
                    completeTask(parseInt(index, 10));
                    promptUser(); // Re-prompt after action
                });
                break;
            case 'delete':
                deleteAllTasks();
                promptUser(); // Re-prompt after action
                break;
            default:
                console.log('Unknown command. Please use "add", "list", "complete", or "delete".');
                promptUser(); // Re-prompt after error
                break;
        }
    });
}

// Start the prompt
promptUser();

// This will automatically create a tasks.json where we would store and manage all our tasks
