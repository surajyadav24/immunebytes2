import React,{useState,useEffect} from 'react';
import axios from "axios"
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
       
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none ml-2 text-white placeholder-gray-400"
          />
        </div>
    
        <span className='text-yellow-300'>{user ? user.username : 'Loading...'}</span>
        <img src="path_to_profile_picture" alt="profile" className="h-8 w-8 rounded-full" />
      </div>
    </div>
</div>
  );
}
export default DashboardHeader;
