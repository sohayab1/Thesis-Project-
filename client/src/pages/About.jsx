import React, { useState } from 'react';

import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1 className="about-title">About CyberSafe</h1>
        <p className="about-subtitle">
          Empowering citizens and officials with a secure, user-centric platform to report and respond to cybercrimes in Bangladesh.
        </p>

        <div className="about-section">
          <h2 className="section-heading">Our Mission</h2>
          <p className="section-text">
            At CyberSafe, our mission is to make cybercrime reporting simple, secure, and accessible for everyone. By applying Human-Computer Interaction (HCI) principles, we ensure that our platform is inclusive and efficient for users of all digital literacy levels.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-heading">Why It Matters</h2>
          <p className="section-text">
            With rising cyber threats in Bangladesh, traditional reporting systems have fallen short due to technical glitches, language barriers, and poor user experience. CyberSafe addresses these challenges by providing a transparent and trusted platform for victims and officials alike.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-heading">Our Team</h2>
          <p className="section-text">
            This platform is developed by a group of dedicated undergraduate students from BRAC University who are passionate about cybersecurity, justice, and usability design. We believe in the power of design to improve systems that matter.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-heading">Contact</h2>
          <p className="section-text">
            Have questions or suggestions? Email us at <a href="mailto:cybersafe@bracu.ac.bd" className="about-link">cybersafe@bracu.ac.bd</a>
          </p>
        </div>
      </div>
    </div>
  );
}
