'use client';
import { useState } from 'react';
import './local.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fname, lname, email, phone, message } = formData;

    if (!fname || !lname || !email || !phone || !message) {
      alert('Please fill all the fields');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ fname: '', lname: '', email: '', phone: '', message: '' });
      } else {
        alert(result.error || 'Failed to send message');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <section id="section-wrapper">
      <div className="box-wrapper">
        <div className="info-wrap">
          <h2 className="info-title">Say Hi to Us</h2>
          <h3 className="info-sub-title">
            We'd love to hear from you!
          </h3>
          <ul className="info-details">
            <li><span>Phone:</span><a href="tel:+975XXXXXXX">+975 XXXXXXXX</a></li>
            <li><span>Email:</span><a href="mailto:ElibRaRy@gmail.com">ElibRaRy@gmail.com</a></li>
            <li><span>Website:</span><a href="#">ElibRaRy.com</a></li>
          </ul>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
        <div className="form-wrap">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Send us a message</h2>
            <div className="form-fields">
              <div className="form-group">
                <input type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="First Name" />
              </div>
              <div className="form-group">
                <input type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last Name" />
              </div>
              <div className="form-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your E-Mail Address" />
              </div>
              <div className="form-group">
                <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
              </div>
              <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your message Here!" />
              </div>
            </div>
            <input type="submit" value="Send Message" className="submit-button" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
