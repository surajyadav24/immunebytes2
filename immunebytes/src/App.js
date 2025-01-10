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
import Defi from './components/Services/Defi';
// import HeaderComponent from "./components/Main-Header/HeaderComponent.jsx";

import { useEffect } from "react";
import { useAuthContext } from "./Context/AuthContext.jsx";
import {Navigate} from 'react-router-dom'
import ThankYouSection from "./components/ThankYou/index.jsx";
import Error from './components/404Eror/'

import HeaderComponent from "./components/Main-Header/HeaderComponent.jsx"
import  Telegram  from "./assets/images/telegram.svg";
// import MyComponent from "./components/ThankYou/index.jsx";
import Blog from '../src/Pages/Blog/index.jsx'
import BlogReadMore from '../src/Pages/BlogReadMore/index.jsx'
import BlogSection from '../src/components/BlogPost/index.jsx'



const checkLoginExpiration = () => {
  const loginTime = localStorage.getItem('loginTime');
  
  if (!loginTime) {
    console.log('User not logged in');
    return;
  }; // User not logged in

  const loginDate = new Date(loginTime);
  const currentDate = new Date();
  console.log(loginDate,currentDate,"login and current date")
  // console.log(currentDate.getTime() > loginDate.getTime() +  60 * 1000,"NOT EQUAL")
  // console.log(currentDate.getTime() > loginDate.getTime() + 24 * 60 * 60 * 1000 ,"EQUAL")


  // Check if the current date is past midnight since the login time
  if (currentDate.getTime() > loginDate.getTime() +24 * 60 * 60 * 1000 ) {
    // Clear localStorage and log the user out
    console.log('Session expired. Logging out...');
    localStorage.clear();
    
    alert('Your session has expired. Please log in again.');
    // Redirect to the login page
    window.location.href = '/dashboard';
  }
};




function App() {

  useEffect(() => {
    console.log("useEffect initialized");
    checkLoginExpiration();
    console.log("its working ")
    // Optionally, set an interval to check every hour or less
    const interval = setInterval(checkLoginExpiration, 10000); // Every hour
    return () => clearInterval(interval);
  }, []);




  const {authUser }= useAuthContext()
  return (
    <>
    <Router>
      <Routes>
        {/* Routes without Layout */}
        <Route path="/" element={
          <Home />
        } 
          />
        {/* <Route path="/about" element={<About />} /> */}

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/dashboard-main"} />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/severity"} />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/addportfolio"} />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/updateportfolio/:selectedItemId"} />} />
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/addplatform"} />} />

  {/* Catch-All Route */}
  <Route path="*" element={<Navigate to="/error" />} />
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
        {/* BlogSection */}
        {/* blogreadmore */}
           <Route
          path="/blog"
          element={
            <Layout2>
            <Blog/>
            </Layout2>
          }
        />
            <Route
          path="/BlogSection"
          element={
            <Layout2>
            <BlogSection/>
            </Layout2>
          }
        />
             <Route
          path="/post/:postId"
          element={
            <Layout2>
            <BlogReadMore/>
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
          path="/thankyoupage"
          element={
            <Layout2>
            <ThankYouSection/>
            </Layout2>
          }
        />
        <Route
          path="/error"
          element={
            <Layout2>
       <Error/>
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
                    {/* <Route
          path="/thankyou"
          element={
            <Layout2>
            <MyComponent/>
             </Layout2>
          }
        /> */}

        {/* MyComponent */}
              <Route
          path="/mainheader"
          element={
            // <Layout2>
            <HeaderComponent/>
            // </Layout2>
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
                <PlatformManagement headname="Add Platform" />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
    <a href="https://t.me/immunebytes" target="_blank" rel="noopener noreferrer">
  <button className="telegram-fixed">
    <img src={Telegram} alt="Telegram" />
  </button>
</a>

    </>
  );
}

export default App;
