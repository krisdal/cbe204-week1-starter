const taskInput = document.querySelector('#task');
const prioritySelect = document.querySelector('#priority-select');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#task-list');
const taskCounter = document.querySelector('#task-counter');

function updateCounter() {
    taskCounter.textContent = `Tasks: ${taskList.children.length}`;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (!taskText) {
        taskInput.focus();
        return;
    }

    const listItem = document.createElement('li');
    const priority = prioritySelect.value;
    listItem.className = `task-item ${priority}`;

    const badge = document.createElement('span');
    badge.className = `priority-badge ${priority}`;
    badge.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);

    const taskTextElement = document.createElement('span');
    taskTextElement.className = 'task-text';
    taskTextElement.textContent = taskText;
    taskTextElement.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (event) => {
        event.stopPropagation();
        listItem.remove();
        updateCounter();
    });

    listItem.appendChild(badge);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    prioritySelect.value = 'low';
    taskInput.focus();
    updateCounter();
}

addButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

updateCounter();
