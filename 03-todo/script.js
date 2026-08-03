const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) return;

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    /***   FIGURE OUT WHAT THIS CODE DOES 
    listItem.addEventListener('click', () => {
         listItem.classList.toggle('completed');
    }); ****/

    // Add new code here
    // 1. append a new child (listItem) to taskList;
    // 2. reset taskInput.value to empty string;
    // 3. focus the mouse back to taskInput;
}

//addButton.addEventListener('click', addTask);

