// OtpForm.js
import React from 'react';
import './style.css'
import Logo from '../../../assets/images/logos/Logo.svg';
function OtpForm({ otp, onOtpChange, onSubmit }) {
  return (
    <div className="otp-container">
 <img className="logo" src={Logo} alt="Logo" />
      <p className="otp-label">Please Enter Your OTP</p>
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            onChange={(e) => onOtpChange(index, e.target.value)}
            maxLength="1"
            className="otp-input"
          />
        ))}
      </div>
      <button type="button" className="button" onClick={onSubmit}>
        Submit OTP
      </button>
    </div>
  );
}

export default OtpForm;
