// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Dashboard from "./Pages/user/Login/Dashboard";
import ForgotPassword from "./Pages/Forgot-password";
import ResetPassword from "./Pages/Reset-Password";
import OtpForm from "./Pages/user/Login/OtpForm";
import SeverityButtons from "./Pages/Savrity-Form";
import Layout from "./Pages/Layout/layout"; // Import the Layout component
import "./App.css";
import DashboardMain from "./Pages/Dashboard-Main";
import AddPortfolio from "./Pages/Add-Portfolio";
import PlatformManagement from './Pages/Add-Platform'
import UpdatePortfolio from "./Pages/Update-Portfolio"

function App() {

  return (
    <Router>
      <Routes>
        {/* Routes without Layout */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/otpform" element={<OtpForm />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:resetPasswordToken" element={<ResetPassword />} />

        {/* Routes with Layout */}
        <Route
          path="/dashboard"
          element={
              <Dashboard />
          }
        />
        <Route
          path="/dashboard-main"
          element={
            <Layout>
              <DashboardMain />
            </Layout>
          }
        />

        <Route
          path="/severity"
        
          element={
            <Layout>
              <SeverityButtons   headname="Severity Dashboard"/>
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
          path="/addportfolio"
          element={
            <Layout>
              <AddPortfolio headname="Add Portfolio"/>
            </Layout>
          }
        />
            <Route
          path="/updateportfolio/:selectedItemId"
          element={
            <Layout>
              <UpdatePortfolio headname="Update Portfolio"/>
            </Layout>
          }
        />


        <Route
          path="/addplatform"
          element={
            <Layout>
              <PlatformManagement headname="Add Portfolio"/>
            </Layout>
          }
        />
      </Routes>

    </Router>
  );
}

export default App;
