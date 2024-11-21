import React, { useState } from 'react';
import DashboardHeader from '../Dashboard-Header';
import Sidebar from '../Dashboard-Sidebar';
import './style.css';
import AuditStats from '../Audit-Stats';
import DashboardAuditProgress from '../../Pages/Dashboard-Progress';
import PortfolioTable from '../../components/PortfolioTable';
import AuditProgress from '../../components/Audit-Progress';
import PlatformList from '../Platform-List';
function DashboardMain() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    console.log(isEditing ? "Editing ended" : "Editing started");
    // Add any additional logic for when the button is clicked
  };


  return (
    <>
      <div className="main-container">
        <AuditStats />
        {/* Pass handleEditClick function as a prop */}

      <div className="audit-edit-wrapper">
          <AuditProgress className="dasboard-progressbar additional-class" />
        <PlatformList/>
      </div>
        {/* <DashboardAuditProgress onEdit={handleEditClick} /> */}
        <div className="dashboard-table-container">

        <PortfolioTable showEditButton={true} />
        </div>

      </div>
    </>
  );
}

export default DashboardMain;
