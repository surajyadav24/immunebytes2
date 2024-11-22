import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import dasboardIcon from "../../../src/assets/images/Dashboard/dashboard-icon.svg";
import platform from "../../../src/assets/images/Dashboard/platform.svg";
import portfolio from "../../../src/assets/images/Dashboard/portfolio-icon.svg";
import sevrity from "../../../src/assets/images/Dashboard/sevrity-icon.svg";
import logout from "../../../src/assets/images/Dashboard/logout.svg";
import menuicon from "../../../src/assets/images/Dashboard/menu-icon.svg";

function Sidebar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Dashboard");
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    window.innerWidth > 1024 // Sidebar visible by default on desktop
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarVisible(true); // Always visible on desktop
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
        localStorage.removeItem('accessToken'); // or sessionStorage depending on your implementation
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
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {window.innerWidth <= 1024 && (
        <button
          className="toggle-sidebar-btn p-2 bg-pink-600 text-white rounded"
          onClick={toggleSidebar}
        >
          <img src={menuicon} alt="Menu Icon" />
        </button>
      )}

      <div className={`sidebar-container ${isSidebarVisible ? "active" : ""}`}>
        <div className="sidebar-wrapper w-64 bg-gray-800 p-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">
            IMMUNE BYTES
          </h2>
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
            className="mt-8 w-full p-2 logout-btn text-white rounded cursor-pointer hover:bg-black-500"
            onClick={handleLogout}
          >
            Logout
            <img src={logout} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
