import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./style.css"
const AuditStats = () => {


  const [stats, setStats] = useState({
    completed: 0,
    inProgress: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.post('/api/v1/users/audit-stats');
        if (response.data) {
          setStats(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);
  const statData = [
    {
      title: "Completed Audits",
      value: `${stats.completed}`,
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "In Progress Audits",
      value: `${stats.inProgress}`,
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <div className="flex space-x-4 p-4 bg-black">
      {statData.map((stat, index) => (
        <div
          key={index}
          className={` audit-wrap flex flex-col justify-center items-center  rounded-lg bg-gradient-to-b ${stat.color} shadow-md sm:flex-col`}
        >
          <p className="title text-white font-bold text-lg">{stat.title}</p>
          <p className="discription text-white text-3xl font-extrabold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default AuditStats;
