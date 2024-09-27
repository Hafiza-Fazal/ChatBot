var sendButton = document.getElementById('send-button');
var userInput = document.getElementById('user-input');
var chatBox = document.getElementById('chat-box');

sendButton.addEventListener('click', function() {
    var userMessage = userInput.value.trim();
    
    if (userMessage) {
        chatBox.innerHTML += '<div class="user-message"><strong>You:</strong> ' + userMessage + '</div>';
        userInput.value = '';

        var botResponse = getBotResponse(userMessage);
        chatBox.innerHTML += '<div class="bot-message"><strong>Bot:</strong> ' + botResponse + '</div>';
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
});

function getBotResponse(message) {
    var response = '';
    if (message.toLowerCase() === 'hello') {
        response = 'Hi there! How can I assist you today?';
    } else if (message.toLowerCase() === 'how are you?') {
        response = 'I am fine, What about you!';
    } else if (message.toLowerCase() === 'I am sad') {
        response = 'dont be sad i have a joke for you. Why can’t you hear a pterodactyl going to the bathroom? Because the "P" is silent.';
    } else if (message.toLowerCase() === 'bye') {
        response = 'Goodbye! Have a great day!';
    }  else {
        response = 'I m not sure how to respond to that. Can you ask something else?';
    }
    return response;
}
