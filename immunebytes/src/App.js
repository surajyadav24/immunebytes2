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
import Layout from "./Pages/Layout/layout";
import "./App.css";
import DashboardMain from "./Pages/Dashboard-Main";
import AddPortfolio from "./Pages/Add-Portfolio";
import PlatformManagement from "./Pages/Add-Platform";
import UpdatePortfolio from "./Pages/Update-Portfolio";
import PrivateRoute from "./components/Private-Route/PrivateRoutes.jsx";
import Layout2 from "./components/Layout/";
import SmartContract from "./components/Services/SmartContractAudit/index.jsx";
import About from "./Pages/About/Index.jsx";
import Penetration from "./components/Services/penetrationTesting"
import BlockchainAudit from './components/Services/BlockchainAudit/index.jsx'
import Defi from './components/Services/Defi'

import { useAuthContext } from "./Context/AuthContext.jsx";
import {Navigate} from 'react-router-dom'
import ThankYouSection from "./components/ThankYou/index.jsx";
import Eror from './components/404Eror/'

function App() {
  const {authUser }= useAuthContext()
  return (
    <Router>
      <Routes>
        {/* Routes without Layout */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/dashboard-main"} />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/severity"} />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/addportfolio"} />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/updateportfolio/:selectedItemId"} />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/addplatform"} />} />


        <Route
          path="/otpform"
          element={
            // <PrivateRoute>
              <OtpForm />
            // </PrivateRoute>
          }
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/resetpassword/:resetPasswordToken"
          element={<ResetPassword />}
        />

        {/* Routes with Layout */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/smartcontract"
          element={
            <Layout2>
            <SmartContract/>
            </Layout2>
          }
        />
        <Route
          path="/penetration-testing"
          element={
            <Layout2>
            <Penetration/>
            </Layout2>
          }
        />
        <Route
          path="/blockchainaudit"
          element={
            <Layout2>
            <BlockchainAudit/>
            </Layout2>
          }
        />
        <Route
          path="/defi"
          element={
            <Layout2>
            <Defi/>
            </Layout2>
          }
        />
        <Route
          path="/thankyou"
          element={
            <Layout2>
            <ThankYouSection/>
            </Layout2>
          }
        />
        <Route
          path="/eror"
          element={
            <Layout2>
       <Eror/>
            </Layout2>
          }
        />
      
              <Route
          path="/about"
          element={
            <Layout2>
            <About/>
            </Layout2>
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
                <SeverityButtons headname="Severity Dashboard" />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/addportfolio"
          element={
            <PrivateRoute>
              <Layout>
                <AddPortfolio headname="Add Portfolio" />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/updateportfolio/:selectedItemId"
          element={
            <PrivateRoute>
              <Layout>
                <UpdatePortfolio headname="Update Portfolio" />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/addplatform"
          element={
            <PrivateRoute>
              <Layout>
                <PlatformManagement headname="Add Portfolio" />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
