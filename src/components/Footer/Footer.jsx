import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm('service_111gmjp', 'template_uytcgid', e.target, 'p0iYy39Azlo3tkdQk')
      .then((result) => {
          console.log(result.text);
          setShowPopup(true);
          setIsSubmitted(true);
      }, (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    e.target.reset();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <footer className='footer'>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitted}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitted}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isSubmitted}
        />
        <button type="submit" disabled={isSubmitting || isSubmitted}>Send</button>
      </form>
      <p>Email: <a href="mailto:danielthatu10@gmail.com">danielthatu10@gmail.com</a></p>
      <p>Phone: <a href="tel:+919730728411">+91 9730728411</a></p>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <p>Submitted successfully</p>
            <p className="popup-note">Note: You have to refresh the page to submit the form again.</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
