import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css'

const SeverityButtons = (props) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [fetchedCounts, setFetchedCounts] = useState({
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    informational: 0,
  });
  const [counts, setCounts] = useState({
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    informational: 0,
  });

  useEffect(() => {
    const fetchSeverityData = async () => {
      try {
        const response = await axios.post('/api/v1/users/getseverity', { withCredentials: true });
        if (response.data.statusCode === 200) {
          const { severityRecord } = response.data.data;
          setFetchedCounts({
            critical: severityRecord.critical || 0,
            high: severityRecord.high || 0,
            medium: severityRecord.medium || 0,
            low: severityRecord.low || 0,
            informational: severityRecord.informational || 0,
          });
        } else {
          setError(response.data.message || 'Failed to fetch severity data');
        }
      } catch (error) {
        console.error(error);
        setError(error.response?.data?.message || 'Error fetching severity data');
      } finally {
        setLoading(false);
      }
    };
    fetchSeverityData();
  }, []);

  const handleInputChange = (e, severity) => {
    const value = parseInt(e.target.value) || 0;
    setCounts((prevCounts) => ({
      ...prevCounts,
      [severity]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('/api/v1/users/severity', { counts }, { withCredentials: true });
      if (response.data.statusCode === 200) {
        navigate('/dashboard-main');
      } else {
        setError(response.data.message || 'Severity failed');
      }
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || 'Severity is invalid');
    }
  };

  return (
    <>
      <div className="dashboard-header">
        <h2>{props.headname}</h2>
      </div>
      <div className="sverity-form bg-gray-800 rounded-lg flex flex-col items-center border-2 border-blue-400">
        <div className="flex flex-wrap justify-center sm:space-x-4 mb-6">
          {Object.keys(fetchedCounts).map((severity) => (
            <div key={severity} className="flex flex-col items-center sevrity-wrapper sm:w-1/2 md:w-1/4 p-2 mb-3">
              <button
                className={`py-2 px-2 font-bold text-white rounded 
                ${severity === "critical" && "bg-[#B22222]"} 
                ${severity === "high" && "bg-[#DC143C]"} 
                ${severity === "medium" && "bg-[#FF8C00]"} 
                ${severity === "low" && "bg-[#DAA520]"} 
                ${severity === "informational" && "bg-[#228B22]"}`}
              >
                {severity.charAt(0).toUpperCase() + severity.slice(1)}
              </button>
              <input
                type="number"
                value={fetchedCounts[severity]}
                readOnly
                className="mt-2 sevrity-input text-lg font-bold text-center w-16 p-1 rounded bg-gray-800 text-pink-600"
              />
              <input
                type="number"
                value={counts[severity]}
                onChange={(e) => handleInputChange(e, severity)}
                className="mt-2 sevrity-input text-lg font-bold text-center w-16 p-1 rounded bg-gray-700 text-white border border-gray-500"
              />
            </div>
          ))}
        </div>
        <button
          className="bg-pink-600 text-white py-2 px-6 rounded font-bold w-full sm:w-auto severity-button"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </>
  );
};

export default SeverityButtons;
