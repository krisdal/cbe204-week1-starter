const taskInput = document.querySelector('#task-input');
const addButton = document.querySelector('#add-button');
const taskList = document.querySelector('#task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    // ถ้าไม่ได้พิมพ์อะไรเลย ให้ออกจากฟังก์ชันทันที
    if (!taskText) return;

    // สร้าง <li>
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // เมื่อคลิกที่รายการ จะสลับการขีดฆ่า
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });

    // เพิ่ม <li> เข้าไปใน <ul>
    taskList.appendChild(listItem);

    // ล้างข้อความในช่อง input
    taskInput.value = '';

    // กลับไปโฟกัสที่ช่อง input
    taskInput.focus();
}

// เมื่อกดปุ่ม Add ให้เรียก addTask()
addButton.addEventListener('click', addTask);