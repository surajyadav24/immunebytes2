import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import axios from "axios";
import "./style.css";
import dasboardIcon from "../../../src/assets/images/Dashboard/dashboard-icon.svg";
import platform from "../../../src/assets/images/Dashboard/platform.svg";
import portfolio from "../../../src/assets/images/Dashboard/portfolio-icon.svg";
import sevrity from "../../../src/assets/images/Dashboard/sevrity-icon.svg";
import logout from "../../../src/assets/images/Dashboard/logout.svg";
import WhiteMenu from "../../../src/assets/images/WhiteMenu.svg";
import WhiteCross from "../../../src/assets/images/WhiteCross.svg";
import logo from '../../assets/images/logos/Logo.svg'


function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();  // Hook to get current location
  // const [activeLink, setActiveLink] = useState("Dashboard");

  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth > 1024 // Sidebar visible by default on desktop
  );




  // Active link state updated based on the URL path
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname;
    if (path.includes("dashboard-main")) return "Dashboard";
    if (path.includes("severity")) return "Severity Found";
    if (path.includes("addportfolio")) return "Portfolio";
    if (path.includes("addplatform")) return "Platform";
    return "Dashboard"; // Default
  });

  useEffect(() => {
    // Update activeLink whenever the URL changes
    const path = location.pathname;
    if (path.includes("dashboard-main")) setActiveLink("Dashboard");
    else if (path.includes("severity")) setActiveLink("Severity Found");
    else if (path.includes("addportfolio")) setActiveLink("Portfolio");
    else if (path.includes("addplatform")) setActiveLink("Platform");
  }, [location]);  // Run this effect whenever the URL changes




  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarVisible(true); // Always visible on desktop
      } else {
        setIsSidebarVisible(false); // Hidden by default on smaller screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "/api/v1/users/Logout",
        {},
        { withCredentials: true }
      );


      if (response.data.statusCode === 200) {
        localStorage.clear();
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user'); // or sessionStorage depending on your implementation
         // or sessionStorage depending on your implementation
        navigate("/dashboard"); 
      } else {
        alert(response.data.message || "Logout failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during logout");
    }
  };

  const handleLinkClick = (link, path) => {
    setActiveLink(link);
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <>
      {window.innerWidth <= 1024 && (
        <button
          className="toggle-sidebar-btn p-2 bg-pink-600 text-white rounded"
          onClick={toggleSidebar}
        >
          <img 
           src={isSidebarVisible ? WhiteCross : WhiteMenu} // Show close or menu icon
          alt="Menu Icon" />
        </button>
      )}

      <div className={`sidebar-container ${isSidebarVisible ? "active" : ""}`}>
        <div className="sidebar-wrapper w-64 bg-gray-800 p-4">
        <div className="flex-center  relative logo-wrapper dashboard-logo">
           
           <img src={logo} alt="" />
         </div>
          <ul className="space-y-4">
            <li
              className={`p-2 rounded cursor-pointer ${
                activeLink === "Dashboard"
                  ? "bg-pink-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => handleLinkClick("Dashboard", "/dashboard-main")}
            >
              <img src={dasboardIcon} alt="" />
              Dashboard
            </li>
            <li
              className={`p-2 rounded cursor-pointer ${
                activeLink === "Severity Found"
                  ? "bg-pink-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => handleLinkClick("Severity Found", "/severity")}
            >
              <img src={sevrity} alt="" />
              Severity Found
            </li>
            <li
              className={`p-2 rounded cursor-pointer ${
                activeLink === "Portfolio"
                  ? "bg-pink-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => handleLinkClick("Portfolio", "/addportfolio")}
            >
              <img src={portfolio} alt="" />
              Portfolio
            </li>
            <li
              className={`p-2 rounded cursor-pointer ${
                activeLink === "Platform"
                  ? "bg-pink-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => handleLinkClick("Platform", "/addplatform")}
            >
              <img src={platform} alt="" />
              Platform
            </li>
     
          </ul>

          <button
            className="mt-8 w-full p-2 logout-btn text-white rounded cursor-pointer flex hover:bg-[#F9116C]"
            onClick={handleLogout}
          >
            Logout
            <img src={logout} alt=""  className="pl-2 pt-1"/>
          </button>
     
        </div>
      </div>
    </>
  );
}

export default Sidebar;
