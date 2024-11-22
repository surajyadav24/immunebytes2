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
import PrivateRoute from './components/Private-Route/PrivateRoutes.jsx'

function App() {

  return (
    <Router>
      <Routes>
        {/* Routes without Layout */}
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/otpform" element={    <PrivateRoute><OtpForm /> </PrivateRoute>} />
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
            <PrivateRoute>
            <Layout>
              <DashboardMain />
            </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/severity"
        
          element={
            <PrivateRoute>
            <Layout>
              <SeverityButtons   headname="Severity Dashboard"/>
            </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/addportfolio"
          element={
            <PrivateRoute>
            <Layout>
              <AddPortfolio headname="Add Portfolio"/>
            </Layout>
            </PrivateRoute>
          }
        />
            <Route
          path="/updateportfolio/:selectedItemId"
          element={
            <PrivateRoute>

            <Layout>
              <UpdatePortfolio headname="Update Portfolio"/>
            </Layout>
                   </PrivateRoute>
          }
        />


        <Route
          path="/addplatform"
          element={
            <PrivateRoute>

            <Layout>
              <PlatformManagement headname="Add Portfolio"/>
            </Layout>
            </PrivateRoute>

          }
        />
      </Routes>

    </Router>
  );
}

export default App;
