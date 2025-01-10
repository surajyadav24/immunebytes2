// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./Context/AuthContext.jsx";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Dashboard from "./Pages/user/Login/Dashboard";
import ForgotPassword from "./Pages/Forgot-password";
import ResetPassword from "./Pages/Reset-Password";
import OtpForm from "./Pages/user/Login/OtpForm";
import SeverityButtons from "./Pages/Savrity-Form";
import Layout from "./Pages/Layout/layout";
import DashboardMain from "./Pages/Dashboard-Main";
import AddPortfolio from "./Pages/Add-Portfolio";
import PlatformManagement from "./Pages/Add-Platform";
import UpdatePortfolio from "./Pages/Update-Portfolio";
import PrivateRoute from "./components/Private-Route/PrivateRoutes.jsx";
import Layout2 from "./components/Layout/";
import SmartContract from "./components/Services/SmartContractAudit/index.jsx";
import About from "./Pages/About/Index.jsx";
import Penetration from "./components/Services/penetrationTesting";
import BlockchainAudit from "./components/Services/BlockchainAudit/index.jsx";
import Defi from "./components/Services/Defi";
import ThankYouSection from "./components/ThankYou/index.jsx";
import Error from "./components/404Eror/";
import HeaderComponent from "./components/Main-Header/HeaderComponent.jsx";
import Blog from "./Pages/Blog/";
import Telegram from "./assets/images/telegram.svg";
import "./App.css";

// Style object for Telegram widget
const styles = {

  messageText: {
    margin: 0,
    fontSize: "14px",
    color: "#000",
  },
  closeButton: {
    position: "absolute",
    top: "-5px",
    right: "6px",
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    color: "#555",
  },
  telegramButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  telegramIcon: {
    width: "50px",
    height: "50px",
  },
};

const checkLoginExpiration = () => {
  const loginTime = localStorage.getItem("loginTime");
  if (!loginTime) return;
  const loginDate = new Date(loginTime);
  const currentDate = new Date();
  if (currentDate.getTime() > loginDate.getTime() + 24 * 60 * 60 * 1000) {
    console.log("Session expired. Logging out...");
    localStorage.clear();
    alert("Your session has expired. Please log in again.");
    window.location.href = "/dashboard";
  }
};

function App() {
  const { authUser } = useAuthContext();
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => setIsVisible(false);

  useEffect(() => {
    console.log("useEffect initialized");
    checkLoginExpiration();
    const interval = setInterval(checkLoginExpiration, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/otpform" element={<OtpForm />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:resetPasswordToken" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/smartcontract" element={<Layout2><SmartContract /></Layout2>} />
          <Route path="/penetration-testing" element={<Layout2><Penetration /></Layout2>} />
          <Route path="/blog" element={<Layout2><Blog /></Layout2>} />
          <Route path="/blockchainaudit" element={<Layout2><BlockchainAudit /></Layout2>} />
          <Route path="/defi" element={<Layout2><Defi /></Layout2>} />
          <Route path="/thankyoupage" element={<Layout2><ThankYouSection /></Layout2>} />
          <Route path="/error" element={<Layout2><Error /></Layout2>} />
          <Route path="/about" element={<Layout2><About /></Layout2>} />
          <Route path="/mainheader" element={<HeaderComponent />} />
          <Route path="/dashboard-main" element={<PrivateRoute><Layout><DashboardMain /></Layout></PrivateRoute>} />
          <Route path="/severity" element={<PrivateRoute><Layout><SeverityButtons headname="Severity Dashboard" /></Layout></PrivateRoute>} />
          <Route path="/addportfolio" element={<PrivateRoute><Layout><AddPortfolio headname="Add Portfolio" /></Layout></PrivateRoute>} />
          <Route path="/updateportfolio/:selectedItemId" element={<PrivateRoute><Layout><UpdatePortfolio headname="Update Portfolio" /></Layout></PrivateRoute>} />
          <Route path="/addplatform" element={<PrivateRoute><Layout><PlatformManagement headname="Add Platform" /></Layout></PrivateRoute>} />
        </Routes>
      </Router>
      <div className="telegram-wrapper">
      {/* Welcome message and Telegram widget */}
      {isVisible && (
      
        <div className="telegram-message-box reveal" style={styles.messageBox}>
          <p style={styles.messageText}>
          Connect with our security experts!
          </p>
          <button style={styles.closeButton} onClick={handleClose}>&times;</button>
        </div>
      )}
      <a href="https://t.me/immunebytes" target="_blank" rel="noopener noreferrer">
        <button className="telegram-fixed" style={styles.telegramButton}>
          <img src={Telegram} alt="Telegram" style={styles.telegramIcon} />
        </button>
      </a>
    </div>
    </div>
  );
}

export default App;
