import { useState } from 'react';
import './Registration.css';

export default function Registration() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-title">User Registration</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <input name="firstName" type="text" placeholder="First Name" className="input-field" onChange={handleChange} required />
          <input name="lastName" type="text" placeholder="Last Name" className="input-field" onChange={handleChange} required />

          <input name="email" type="email" placeholder="Email Address" className="input-field" onChange={handleChange} required />
          <input name="phone" type="text" placeholder="Phone Number" className="input-field" onChange={handleChange} required />

          <input name="nidNumber" type="text" placeholder="NID Number" className="input-field" onChange={handleChange} required />

          <div className="file-wrapper">
            <label className="label">Upload NID (Front)</label>
            <input name="nidFront" type="file" className="file-input" onChange={handleChange} required />
          </div>

          <div className="file-wrapper">
            <label className="label">Upload NID (Back)</label>
            <input name="nidBack" type="file" className="file-input" onChange={handleChange} required />
          </div>

          <div className="file-wrapper full-span">
            <label className="label">Upload a Selfie</label>
            <input name="selfie" type="file" className="file-input" onChange={handleChange} required />
          </div>

          <input name="password" type="password" placeholder="Password" className="input-field" onChange={handleChange} required />
          <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input-field" onChange={handleChange} required />

          <div className="full-span">
            <button type="submit" className="submit-button">SIGN UP</button>
          </div>
        </form>

        <div className="form-footer">
          Already have an account? <a href="/login" className="login-link">Log In Here</a>
        </div>
      </div>
    </div>
  );
}
