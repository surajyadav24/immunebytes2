// OtpForm.js
import React from 'react';

function OtpForm({ otp, onOtpChange, onSubmit }) {
  return (
    <div className="otp-container">
      <p className="otp-label">OTP</p>
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
