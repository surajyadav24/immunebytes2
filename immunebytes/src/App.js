// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import './App.css';
import Dashboard from "./Pages/user/Login/Dashboard";
import ForgotPassword from "./Pages/Forgot-password";
import ResetPassword from "./Pages/Reset-Password";
import DashboardMain from './Pages/Dashboard-Main';
import OtpForm from './Pages/user/Login/OtpForm';

function App() {
  // State for the OTP
  const [otp, setOtp] = useState('');

  // Function to handle OTP input changes
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  // Function to handle OTP submission
  const handleSubmit = () => {
    alert(`OTP Submitted: ${otp}`);
    // Add your logic here for handling the OTP submission (e.g., API call)
  };

  // Function to handle resending the OTP
  const handleResend = () => {
    alert('Resending OTP...');
    setOtp(''); // Reset the OTP if needed
    // Add your logic here for resending the OTP (e.g., API call)
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/otpform"
          element={
            <OtpForm
              otp={otp}
              onOtpChange={handleOtpChange}
              onSubmit={handleSubmit}
              onResend={handleResend}
            />
          }
        />
        <Route path="/Dashboard-main" element={<DashboardMain />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
