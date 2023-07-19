import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to your backend or a third-party API here
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input className="con-input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input className="con-input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea className="con-input"
          id="message"
          name="message"
          rows={10}
          cols={20}
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" className="contact-btn">Submit</button>
      </form>
    </div>

  );
};

export default Contact;
