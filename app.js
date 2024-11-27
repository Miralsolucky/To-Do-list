const addButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    li.appendChild(taskContent);

    // Mark task as completed
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.textContent = '✔';
    completeButton.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
    li.appendChild(completeButton);

    // Delete task
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();  // Prevent completion toggle
      taskList.removeChild(li);
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';  // Clear input field after adding task
  }
}

// Add task on button click
addButton.addEventListener('click', addTask);

// Add task when pressing 'Enter' key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});