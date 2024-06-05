document.addEventListener('DOMContentLoaded', function() {
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', function(){
const taskText = todoInput.value;
if (taskText === '') {
alert('Please enter a task');
return;
}

const listItem = document.createElement('li');
listItem.textContent = taskText;

listItem.addEventListener('click', function(){
listItem.classList.toggle('completed');
});

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', function() {
todoList.removeChild(listItem);
});

listItem.appendChild(deleteButton);
todoList.appendChild(listItem);

todoInput.value = '';
    });

});
