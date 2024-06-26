// App.js
import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ImageGenerationPage from './components/ImageGeneration';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { AuthProvider } from './components/AuthContext';
import { AlertProvider, useAlert } from './components/AlertContext';
import ProtectedRoute from './components/ProtectedRoute';

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
      <AuthProvider>
      <AlertProvider>
        <Router>
          
          <Navbar />
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="/image-generation" element={<ImageGenerationPage messages={messages} onSendMessage={handleSendMessage}/>}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          
        </Router>
        </AlertProvider>
      </AuthProvider>
    </div>
  );
};

const Alert = () => {
  const { alertMessage, alertVisible } = useAlert();

  return (
    alertVisible && (
      <div className="alert">
        {alertMessage}
      </div>
    )
  );
};
export default App;
