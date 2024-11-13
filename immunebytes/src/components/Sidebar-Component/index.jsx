import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => (
  <div className="sidebar">
    <h2>IMMUNE BYTES</h2>
    <ul>
      <li className="active">Dashboard</li>
      <li>Severity Found</li>
      <li>Portfolio</li>
      <li>Platform</li>
    </ul>
    <div className="logout">
      <FaSignOutAlt /> Logout
    </div>
  </div>
);

export default Sidebar;
