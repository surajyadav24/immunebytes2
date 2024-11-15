// src/components/Layout/Layout.js
import React from 'react';
import DashboardHeader from '../Dashboard-Header';
import Sidebar from '../Dashboard-Sidebar';
import './style.css';

function Layout({ children }) {
  return (
    <div className="main-container flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />
        {/* Page Content */}
        <div className="layout-wrapper p-8 bg-gray-900 flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
