import './formStyles.css';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Form = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');

  let onSubmit = (event) => {
    event.preventDefault()
    const frmdetails = {
      'User_Name': userName,
      'Email': email,
      'Messages': messages
    }
    console.log(frmdetails);
  }

  return (
    <div className='form'>
      <form>
        <label>Your Name</label>
        <input onChange={(e) => { setUserName(e.target.value); }} type='text' value={userName}></input>
        <label>Email</label>
        <input onChange={(e) => { setEmail(e.target.value); }} type='email' value={email}></input>
        <label>Message</label>
        <textarea onChange={(e) => { setMessages(e.target.value); }} rows="6" placeholder='Type your messages here' value={messages} />
        <button className='btn'><a href="https://wa.me/9599334028" target="_blank" rel="noopener noreferrer">Submit</a></button>
      </form>
    </div>
  );
}

export default Form;