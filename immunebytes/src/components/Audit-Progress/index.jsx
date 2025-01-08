import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from '../Progressbar'
import "./style.css"
function AuditProgress( props) {

  const [percentages, setPercentages] = useState({
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    informational: 0,
  });

  useEffect(() => {
    const fetchSeverityData = async () => {
      try {
        const response = await axios.post('/api/v1/users/getseverity');
        if (response.data && response.data.data && response.data.data.percentages) {
          setPercentages((prevPercentages) => ({
            ...prevPercentages,
            ...response.data.data.percentages, // Merge with existing percentages
          }));
        } else {
          console.error('Invalid response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching severity data', error);
      }
    };
  
    fetchSeverityData();
  }, []);
  


  return (
<>
<div className='audit-progress-dashboard'>
<div className="audit-progress"  >
    <h4>Severity Found</h4>
    <ProgressBar label="Critical" color="#ff4d4d" percentage={percentages.critical} />
            <ProgressBar label="High" color="#ff9966" percentage={percentages.high} />
            <ProgressBar label="Medium" color="#ffcc66" percentage={percentages.medium} />
            <ProgressBar label="Low" color="#66ff66" percentage={percentages.low} />
            <ProgressBar label="Informational" color="#66cc66" percentage={percentages.informational} />
  </div>
  </div>
</> 
  )
}

export default AuditProgress