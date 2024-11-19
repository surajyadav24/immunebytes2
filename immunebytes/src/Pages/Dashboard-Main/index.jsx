import React, { useState } from 'react';
import DashboardHeader from '../Dashboard-Header';
import Sidebar from '../Dashboard-Sidebar';
import './style.css';
import AuditStats from '../Audit-Stats';
import DashboardAuditProgress from '../../Pages/Dashboard-Progress';
import PortfolioTable from '../../components/PortfolioTable';
import AuditProgress from '../../components/Audit-Progress';
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

<AuditProgress/>

        {/* <DashboardAuditProgress onEdit={handleEditClick} /> */}
        <PortfolioTable showEditButton={true} />
      </div>
    </>
  );
}

export default DashboardMain;
