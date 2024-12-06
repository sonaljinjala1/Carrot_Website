// src/ContactForm.js
import React, { useState } from 'react';
import { database, ref, set } from './firebase';
import { useNavigate } from 'react-router-dom';
import './App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactRef = ref(database, 'contacts/' + Date.now());
    set(contactRef, formData)
      .then(() => {
        alert('Message sent successfully!');
        navigate('/'); // Redirect to Home page after submission
      })
      .catch((error) => alert('Error: ' + error.message));
  };

  return (
    <div className="contact-form-container">
      <div className="company-info">
        <h2>Sample Company</h2>
        <p>Address</p>
        <p>Phone Number</p>
        <p>Email</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Email Us</h2>
        <div className="form-group">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
