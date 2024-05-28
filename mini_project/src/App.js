import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ImageGenerationPage from './components/ImageGeneration';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

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
      <Router>
      <Navbar />
        
        
        <Routes>
        
        <Route path="/image-generation" element={<ImageGenerationPage messages={messages} onSendMessage={handleSendMessage} />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        
        </Routes>
      </Router>
    </div>
  );
};

export default App;
