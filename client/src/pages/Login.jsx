import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', credentials);
    // Future: Add API integration here
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2 className="login-title">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input-field"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">Login</button>
        </form>

        <div className="login-footer">
          Don’t have an account? <a href="/report" className="signup-link">Register Here</a>
        </div>
      </div>
    </div>
  );
}
