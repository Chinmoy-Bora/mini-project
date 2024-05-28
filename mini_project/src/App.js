import React, { useState } from 'react';
import axios from 'axios';
import ChatBox from './components/ChatBox';
import MessageInput from './components/MessageInput';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const newMessages = [...messages, { sender: 'user', text: message }];
    setMessages(newMessages);

    try {
      const response = await axios.post('http://localhost:4040/send', { message });
      const botMessage = response.data.reply;
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botMessage }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="App">
      <Navbar/>
      <ChatBox messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
