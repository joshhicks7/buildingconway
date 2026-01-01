import React, { useState } from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with Keller Johnson Construction
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <ScrollAnimation animation="slide-right" delay={100}>
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>
                  Whether you're looking to build a new home, need commercial construction 
                  services, or have questions about our rental properties, we're here to help.
                </p>
                
                <div className="contact-details">
                  <ScrollAnimation animation="fade-in" delay={200}>
                    <div className="contact-detail-item">
                      <div className="detail-icon">📍</div>
                      <div className="detail-content">
                        <h3>Address</h3>
                        <p>720 S Harkrider St<br />Conway, AR 72032</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation animation="fade-in" delay={300}>
                    <div className="contact-detail-item">
                      <div className="detail-icon">📞</div>
                      <div className="detail-content">
                        <h3>Phone</h3>
                        <p><a href="tel:501-514-5819">501-514-5819</a></p>
                      </div>
                    </div>
                  </ScrollAnimation>
                  
                  <ScrollAnimation animation="fade-in" delay={400}>
                    <div className="contact-detail-item">
                      <div className="detail-icon">✉️</div>
                      <div className="detail-content">
                        <h3>Email</h3>
                        <p><a href="mailto:kellerjohnson@conwaycorp.net">kellerjohnson@conwaycorp.net</a></p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={200}>
              <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(501) 555-1234"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

