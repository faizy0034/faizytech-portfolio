import React, { useState } from 'react';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All fields are required!');
      return;
    }

    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-form">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Reach Me Directly</h3>
        <ul>
          <li><strong>Email:</strong> adekunlefaizoladebayo@gmail.com</li>
          <li><strong>WhatsApp:</strong> 07070670152</li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/faizy_tech001" target="_blank" rel="noopener noreferrer">@faizy_tech001</a></li>
          <li><strong>Twitter (X):</strong> <a href="https://x.com/faizytech001" target="_blank" rel="noopener noreferrer">@faizytech001</a></li>
        </ul>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default ContactForm;
