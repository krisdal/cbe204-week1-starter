const nameInput = document.querySelector('#name-input'); //ค้นหา element ใน HTML ที่มี id เป็น name-input และเก็บไว้ในตัวแปร nameInput
const greetButton = document.querySelector('#greet-button'); //
const greeting = document.querySelector('#greeting');

greetButton.addEventListener('click', () => {
  const name = nameInput.value.trim(); // Get name from nameInput 

  if (name) {
    greeting.textContent = `Hello, ${name}!`; // figure out how to print "Hello <then value of variable name>"
  } else {
    greeting.textContent = 'Hello, friend!';
  }
});
