import React from 'react';
import "./style.css"
const AuditStats = () => {
  const stats = [
    {
      title: "Total Audits",
      value: "230+",
      color: "from-pink-500 to-pink-700",
    },
    {
      title: "Pending Audits",
      value: "10+",
      color: "from-green-500 to-green-700",
    },
  ];

  return (
    <div className="flex space-x-4 p-4 bg-black">
      {stats.map((stat, index) => (
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
