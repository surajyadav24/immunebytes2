// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import './App.css'
import Dashboard from "./Pages/user/Login/Dashboard";
import ForgotPassword from "./Pages/Forgot-password";
import ResetPassword from "./Pages/Reset-Password";
import DashboardMain from './Pages/Dashboard-Main'
import OtpForm from './Pages/user/Login/OtpForm'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/otpform" element={<OtpForm/>} />


        <Route path="/Dashboard-main" element={<DashboardMain/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/resetpassword" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
