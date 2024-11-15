import React from 'react';
import './style.css'
const ProjectCards = () => {
  const cardData = [
    { title: 'Total Audit', count: '230+', bgColor: 'bg-gradient-to-r from-pink-500 to-purple-700' },
    
    { title: 'Projects Pending', count: '205+', bgColor: 'bg-gradient-to-r from-yellow-500 to-yellow-700' },
  ];

  return (
    <div className="flex gap-4 justify-center items-center p-4 cards-wrapper ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`cards flex flex-col justify-center items-center rounded-lg ${card.bgColor} shadow-lg p-4`}
        >
          <p className="text-white text-md font-semibold card-title">{card.title}</p>
          <p className="text-white  font-bold card-count">{card.count}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
