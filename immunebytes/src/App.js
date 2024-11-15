// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Dashboard from "./Pages/user/Login/Dashboard";
import ForgotPassword from "./Pages/Forgot-password";
import ResetPassword from "./Pages/Reset-Password";
import OtpForm from './Pages/user/Login/OtpForm';
import SeverityButtons from "./Pages/Savrity-Form";
import Layout from "./Pages/Layout/layout";  // Import the Layout component
import './App.css';
import DashboardMain from "./Pages/Dashboard-Main";

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
        {/* Routes without Layout */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/otpform" element={<OtpForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* Routes with Layout */}
        <Route 
          path="/dashboard" 
          element={
            <Layout>
              <Dashboard />
            </Layout>
          } 
        />
        <Route 
          path="/dashboard-main" 
          element={
            <Layout>
              <DashboardMain/>
            </Layout>
          } 
        />
        <Route 
          path="/severity" 
          element={
            <Layout>
              <SeverityButtons />
            </Layout>
          } 
        />
        <Route 
          path="/severity" 
          element={
            <Layout>
     <SeverityButtons/>
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
