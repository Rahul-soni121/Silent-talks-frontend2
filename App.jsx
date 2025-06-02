import React, { useState } from 'react';
import Chat from './Chat';
import './style.css';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    relationship: '',
    photo: null,
  });
  const [startChat, setStartChat] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartChat(true);
  };

  if (startChat) return <Chat userData={formData} />;

  return (
    <div className="container">
      <h1>Silent Talks: Dil Se Dil Tak</h1>
      <p className="description">
        Kabhi kabhi hum un logon se baat karna chahte hain jo ab humare saath nahi hain — iss app ke zariye aap unse dil se baat kar sakte hain. Ek ehsaasi safar jo aapke jazbaat ko samjhe aur aapko shanti de.
      </p>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Unka Naam" required onChange={handleChange} />
        <input type="number" name="age" placeholder="Unki Umar" required onChange={handleChange} />
        <input type="text" name="relationship" placeholder="Aapka Rishta (jaise: dost, maa, pyaar)" required onChange={handleChange} />
        <input type="file" name="photo" accept="image/*" required onChange={handleChange} />
        <button type="submit">Start Chat</button>
      </form>
    </div>
  );
}