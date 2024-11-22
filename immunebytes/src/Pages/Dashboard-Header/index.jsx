import React,{useState,useEffect} from 'react';
import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import axios from "axios"
import './style.css'


function DashboardHeader() {

  const [user, setUser] = useState(null);

  // Fetch the logged-in user's data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Send a request to the backend to get the logged-in user's data
        const response = await axios.post('/api/v1/users/me', { withCredentials: true });

        // Update the state with the user's data
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
<div className="header-container">
<div className=" flex items-center justify-between p-4 header-wrap">
      <h2 className="text-xl text-white font-semibold">Good Morning <span className='text-yellow-300'>{user ? user.username : 'Loading...'}</span> </h2>
      <div className="flex items-center space-x-4">
        <div className="search-box flex items-center  p-2 rounded">
          <SearchIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none ml-2 text-white placeholder-gray-400"
          />
        </div>
        <BellIcon className="h-6 w-6 text-white" />
        <span className='text-yellow-300'>{user ? user.username : 'Loading...'}</span>
        <img src="path_to_profile_picture" alt="profile" className="h-8 w-8 rounded-full" />
      </div>
    </div>
</div>
  );
}
export default DashboardHeader;
