const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const taskInput = document.getElementById('task-input');
const assigneeSelect = document.getElementById('assignee');
const assignTaskButton = document.getElementById('assign-task-button');
const taskList = document.getElementById('task-list');

// Functionality for sending chat messages
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    // Send the message to the chat log
    chatLog.innerHTML += `<div>You: ${message}</div>`;
    // Clear the input field
    messageInput.value = '';
  }
});

// Functionality for assigning tasks
assignTaskButton.addEventListener('click', () => {
  const taskDescription = taskInput.value;
  const selectedAssignee = assigneeSelect.value;

  if (taskDescription.trim() !== '' && selectedAssignee !== '') {
    // Assign the task to the selected assignee
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
      <span class="task-description">${taskDescription}</span>
      <span class="assignee">Assignee: ${selectedAssignee}</span>
    `;
    taskList.appendChild(taskElement);

    // Clear the input fields
    taskInput.value = '';
    assigneeSelect.value = '';
  }
});

// Functionality for dynamically populating the assignee dropdown
const users = ['User 1', 'User 2']; // Add more users as needed
for (const user of users) {
  const option = document.createElement('option');
  option.text = user;
  option.value = user;
  assigneeSelect.add(option);
}
