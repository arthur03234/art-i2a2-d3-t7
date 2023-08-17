const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    appendMessage('user', message);
    fetchMessageFromBackend(message);
    userInput.value = '';
}

function appendMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = text;
    chatLog.appendChild(messageElement);
}

function fetchMessageFromBackend(message) {
    // Implement code to send the message to your backend and get a response
    // You will integrate this with the OpenAI API in the backend.
    // Once you get a response, call appendMessage('bot', response) to display it.
}
