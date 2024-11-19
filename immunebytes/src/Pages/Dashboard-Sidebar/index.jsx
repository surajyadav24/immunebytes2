import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Sidebar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState('Dashboard');

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        '/api/v1/users/Logout',
        {},
        { withCredentials: true }
      );
      console.log("response-data", response.data);

      if (response.data.statusCode === 200) {
        navigate('/');
      } else {
        alert(response.data.message || 'Logout failed');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during logout');
    }
  };

  const handleLinkClick = (link, path) => {
    setActiveLink(link);
    navigate(path);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper w-64 bg-gray-800 p-4 hidden md:block">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">IMMUNE BYTES</h2>
        <ul className="space-y-4">
          <li
            className={`p-2 rounded cursor-pointer ${
              activeLink === 'Dashboard' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => handleLinkClick('Dashboard', '/dashboard-main')}
          >
            Dashboard
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${
              activeLink === 'Severity Found' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => handleLinkClick('Severity Found', '/severity')}
          >
            Severity Found
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${
              activeLink === 'Portfolio' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => handleLinkClick('Portfolio', '/addportfolio')}
          >
            Portfolio
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${
              activeLink === 'Platform' ? 'bg-pink-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
            onClick={() => handleLinkClick('Platform', '/addplatform')}
          >
            Platform
          </li>
        </ul>
        <button
          className="mt-8 w-full p-2 bg-pink-600 text-white rounded cursor-pointer hover:bg-pink-500"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
