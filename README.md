# To-Do List Application

This is a simple To-Do List application built with HTML, CSS, and JavaScript. It allows users to add, check, and remove tasks. The tasks are saved in the browser's local storage, so they persist even after the page is refreshed.
## Example SS
![image](https://github.com/user-attachments/assets/787f3bf2-1ba6-4423-8530-e13707d25cf0)
## Project Structure


- `assests/`: Contains images used in the application.
- `desktop.ini`: Configuration file for folder view settings.
- `index.css`: Contains the styles for the application.
- `index.html`: The main HTML file that structures the application.
- `index.js`: Contains the JavaScript code for the application's functionality.

## Features

- Add tasks to the list.
- Mark tasks as completed by clicking on them.
- Remove tasks by clicking the "×" button.
- Tasks are saved in local storage and persist across page reloads.

## Usage

1. Open `index.html` in a web browser.
2. Enter a task in the input box and press Enter or click the "Add" button.
3. Click on a task to mark it as completed.
4. Click the "×" button next to a task to remove it.

## Code Overview

### HTML

The HTML file sets up the structure of the application. It includes an input box for adding tasks, a button to add tasks, and a list container to display the tasks.

### CSS

The CSS file styles the application. It includes styles for the container, the to-do app, the input box, the button, and the task list.

### JavaScript

The JavaScript file contains the functionality of the application. It includes functions to add tasks, save tasks to local storage, show tasks from local storage, and handle task completion and removal.

#### Functions

- `addTask()`: Adds a new task to the list.
- `saveData()`: Saves the current list of tasks to local storage.
- `showTask()`: Loads the list of tasks from local storage and displays them.

## License

This project is licensed under the MIT License.
