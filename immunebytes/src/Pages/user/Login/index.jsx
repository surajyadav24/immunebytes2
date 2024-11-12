import React, { useState } from 'react';
import './style.css';
import Logo from '../../../assets/images/logos/Logo.svg'

function LoginForm() {
  const [showOtp, setShowOtp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(Array(6).fill(''));

  const handleLogin = (e) => {
    e.preventDefault();
    setShowOtp(true);
  };

  const handleOtpChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  return (
 <div className="form-container">
       <div className="container">
      <form onSubmit={handleLogin} className="form">
        <img className='logo' src={Logo} alt="" />
        <h2 className="title">Login to your Dashboard</h2>
        <p className="subtitle">Welcome back! Select method to login</p>

        <div className="input-group">
          <label className="label">User Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
            className="input"
          />
        </div>

        <div className="input-group">
          <label className="label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input"
          />
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>

        <button type="submit" className="button">Login</button>

        {showOtp && (
          <div className="otp-container">
            <p className="otp-label">OTP</p>
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  maxLength="1"
                  className="otp-input"
                />
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
 </div>
  );
}

export default LoginForm;
