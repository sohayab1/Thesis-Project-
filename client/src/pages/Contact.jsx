import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We're here to support your safety and privacy. Reach out anytime.</p>

        <div className="contact-info">
          <div className="contact-detail">
            <h2>Email</h2>
            <p><a href="mailto:cybersafe@bracu.ac.bd">cybersafe@bracu.ac.bd</a></p>
          </div>
          <div className="contact-detail">
            <h2>Phone</h2>
            <p>+880-1700-000000</p>
          </div>
        </div>

        <div className="map-section">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.320017328264!2d90.36710707596056!3d23.81059608658957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1b3c2e4c251%3A0x2b79b7d93dc4c8b0!2sBashundhara%20City%20Shopping%20Complex!5e0!3m2!1sen!2sbd!4v1720426577204!5m2!1sen!2sbd"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
