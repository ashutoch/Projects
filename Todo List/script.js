const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                todoItem.classList.add('checked');
            } else {
                todoItem.classList.remove('checked');
            }
        });
        todoItem.appendChild(checkbox);
        const todoLabel = document.createElement('label');
        todoLabel.textContent = todoText;
        todoItem.appendChild(todoLabel);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
});