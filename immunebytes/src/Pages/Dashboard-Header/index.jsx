import React from 'react';
import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import './style.css'
function DashboardHeader() {
  return (
<div className="header-container">
<div className=" flex items-center justify-between p-4 bg-gray-800">
      <h2 className="text-xl text-white font-semibold">Good Morning User</h2>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-700 p-2 rounded">
          <SearchIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none ml-2 text-white placeholder-gray-400"
          />
        </div>
        <BellIcon className="h-6 w-6 text-white" />
        <span>Pradeep</span>
        <img src="path_to_profile_picture" alt="profile" className="h-8 w-8 rounded-full" />
      </div>
    </div>
</div>
  );
}
export default DashboardHeader;
