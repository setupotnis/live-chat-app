var socket = io('http://localhost:3000');
const messageForm = document.getElementById('send-container')
const messageContainer = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('what is your name?')
appendMessage('You joined')
socket.emit('new-user', message)

socket.on('chat-message', data => {
    appendMessage(data)
});

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value 
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}