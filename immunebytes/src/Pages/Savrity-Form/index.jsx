import React, { useState } from "react";

const SeverityButtons = () => {
  // Initial count for each severity level
  const [counts, setCounts] = useState({
    critical: 5,
    high: 2,
    medium: 4,
    low: 1,
    informational: 6,
  });

  // Function to handle input change
  const handleInputChange = (e, severity) => {
    const value = parseInt(e.target.value) || 0; // Convert input to number, default to 0
    setCounts((prevCounts) => ({
      ...prevCounts,
      [severity]: value,
    }));
  };

  // Function to handle submit
  const handleSubmit = () => {
    alert(`Submitted counts: ${JSON.stringify(counts)}`);
  };

  return (
    <div className="sverity-form bg-gray-800 p-6 rounded-lg flex flex-col items-center border-2 border-blue-400">
      <div className="flex space-x-4 mb-6">
        {Object.keys(counts).map((severity) => (
          <div key={severity} className="flex flex-col items-center">
            <button
              className={`py-2 px-4 font-bold text-white rounded 
                ${severity === "critical" && "bg-red-600"} 
                ${severity === "high" && "bg-red-700"} 
                ${severity === "medium" && "bg-orange-500"} 
                ${severity === "low" && "bg-yellow-400 text-black"} 
                ${severity === "informational" && "bg-green-600"}`}
            >
              {severity.charAt(0).toUpperCase() + severity.slice(1)}
            </button>
            <input
              type="number"
              value={counts[severity]}
              onChange={(e) => handleInputChange(e, severity)}
              className="mt-2 text-lg font-bold text-center w-16 p-1 rounded bg-gray-700 text-white border border-gray-500"
            />
          </div>
        ))}
      </div>
      <button
        className="bg-pink-500 text-white py-2 px-6 rounded font-bold"
        onClick={handleSubmit}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default SeverityButtons;
