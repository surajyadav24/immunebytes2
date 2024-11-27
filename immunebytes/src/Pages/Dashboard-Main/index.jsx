import React, { useState, useEffect } from 'react';
import DashboardHeader from '../Dashboard-Header';
import Sidebar from '../Dashboard-Sidebar';
import './style.css';
import AuditStats from '../Audit-Stats';
import AuditProgress from '../../components/Audit-Progress';
import PortfolioTable from '../../components/PortfolioTable';
import PlatformList from '../Platform-List';
import axios from 'axios';
import PlatformManagement from '../Add-Platform'

function DashboardMain() {
  const [platforms, setPlatforms] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlatforms = async () => {
      try {
        const response = await axios.post('https://immunebytes2-jn9u.vercel.app/getplatforms', { withCredentials: true });
        if (response.data.statusCode === 200) {
          setPlatforms(response.data.data.platforms);
        } else {
          setError('Failed to fetch platforms');
        }
      } catch (err) {
        console.error(err);
        setError('Failed to fetch platforms');
      }
    };

    fetchPlatforms();
  }, []);

  return (
    <div className="main-container">
      <AuditStats />
      <div className="audit-edit-wrapper">
        <AuditProgress className="dasboard-progressbar additional-class" />
        <PlatformManagement/>
      </div>
      <div className="dashboard-table-container">
        <PortfolioTable showEditButton={true} />
      </div>
    </div>
  );
}

export default DashboardMain;
