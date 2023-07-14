import React, { useState } from 'react';
import '../assets/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form submitted');
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container">
      <h2>Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="label" htmlFor="name">Name:</label>
          <input
            className="input"
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          {nameError && <p className="error">{nameError}</p>}
        </div>
        <div className="form-row">
          <label className="label" htmlFor="email">Email:</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="form-row">
          <label className="label" htmlFor="message">Message:</label>
          <textarea
            className="textarea"
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
