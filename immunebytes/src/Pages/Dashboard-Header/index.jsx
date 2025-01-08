import React,{useState,useEffect} from 'react';
import { SearchIcon, BellIcon } from '@heroicons/react/solid';
import axios from "axios"
import use from '../../assets/images/user.svg'
// import " " from '../../assets/images/user.svg'
import './style.css'


function DashboardHeader() {

  const [user, setUser] = useState(null);

  const [greeting, setGreeting] = useState("Hello");

  // Determine the greeting based on Indian time
  useEffect(() => {
    const determineGreeting = () => {
      // Get the current time in UTC
      const nowUTC = new Date();

      // Convert UTC to IST (UTC+5:30)
      const ISTOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
      const nowIST = new Date(nowUTC.getTime() + ISTOffset);

      // Get the hour in IST
      const hourIST = nowIST.getHours();

      // Determine greeting based on IST hour
      if ( hourIST < 12 ) {
        setGreeting("Good Morning");
      } else if (hourIST > 14) {
        setGreeting("Good Afternoon");
      } else if (hourIST > 22) {
        setGreeting("Good Evening");
      } else {
        setGreeting("Good Night");
      }
    };

    determineGreeting();
  }, []);


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
      <h2 className="text-xl text-white font-semibold">  {greeting}{" "} <span className='text-yellow-300'>{user ? user.username : 'Loading...'}</span> </h2>
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
        <img src={use} alt="profile" className="h-8 w-8 rounded-full border-2 p-1 "  style={{borderColor: '#F9116C', boxShadow: '0 0 0 4px #f43f5e' }} />
      </div>
    </div>
</div>
  );
}
export default DashboardHeader;
