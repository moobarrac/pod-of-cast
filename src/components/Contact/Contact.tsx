import React, { useState } from "react";
import Sparkle from '../../assests/images/Sparkle.svg';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // replace with actual form submission logic
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <div className='contact-title'>
          <h3>What our listeners say</h3>
          <p>Their experience through our platform</p>
          <div className='contact-icon'>
            <img src={Sparkle} alt="" />
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name <span className="text-orange">*</span></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email <span className="text-orange">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone <span className="text-orange">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject <span className="text-orange">*</span></label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message <span className="text-orange">*</span></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={() => handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-dark btn-shadow btn-lg">Submit</button>
    </form>
      </div>
    </section>
  );
};

export default Contact;
