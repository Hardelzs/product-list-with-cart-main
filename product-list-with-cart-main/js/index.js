Swal.fire("Welcome to Hardelz store!");

const buttons = document.querySelectorAll('#btn1');
const countElement = document.getElementById('count');
let count = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
  });
});


