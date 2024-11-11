import React, { useState } from "react";
import Logo from "../../assets/images/logos/Logo.svg";
import "./style.css";

function Login() {
  const [showOTPInput, setShowOTPInput] = useState(false);

  const handleOTPRequest = () => {
    // Here you can add logic to request OTP, e.g., API call
    setShowOTPInput(true); // Show the OTP input fields after sending OTP
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={Logo} alt="Immunebytes Logo" className="logo" />
        <h2>Login to your Dashboard</h2>
        <p>Welcome back! Select method to login</p>

        <form className="login-form">
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button type="button" onClick={handleOTPRequest}>Send OTP</button>
        </form>

        <p className="forgot-password">Forgot Password?</p>

        {showOTPInput && (
          <div className="otp-container">
            <label style={{ color: "white" }}>OTP</label>
            <div className="otp-inputs">
              {Array.from({ length: 6 }).map((_, index) => (
                <input key={index} type="text" maxLength="1" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
