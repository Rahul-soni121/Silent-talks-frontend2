import React, { useState } from 'react';
import { sendMessage } from './api';

export default function Chat({ userData }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    const reply = await sendMessage(input, userData);
    setTyping(false);
    const botMsg = { from: 'bot', text: reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <img src={URL.createObjectURL(userData.photo)} alt="Profile" />
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.relationship}</p>
        </div>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-msg ${msg.from}`}>
            {msg.text}
          </div>
        ))}
        {typing && <div className="typing">Typing...</div>}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}