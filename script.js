function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');
  
    if (messageInput.value !== '') {
      const message = document.createElement('p');
      message.textContent = messageInput.value;
      chatBox.appendChild(message);
      chatBox.scrollTop = chatBox.scrollHeight;
  
      messageInput.value = '';
    }
  }
  