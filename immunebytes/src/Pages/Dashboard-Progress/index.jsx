import React, { useState } from 'react';
import ProgressBar from '../../components/Progressbar';

function DashboardAuditProgress() {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    console.log(isEditing ? "Editing ended" : "Editing started");
    // Add any logic you need to handle when the Edit button is clicked
  };

  return (
    <>
      <div className="audit-progress dasaupro">
        <h4>Severity Found</h4>
        
        {/* Progress Bars */}
        <ProgressBar label="Critical" color="#ff4d4d" percentage={58} />
        <ProgressBar label="High" color="#ff9966" percentage={70} />
        <ProgressBar label="Medium" color="#ffcc66" percentage={30} />
        <ProgressBar label="Low" color="#66ff66" percentage={60} />
        <ProgressBar label="Informational" color="#66cc66" percentage={90} />
        
        {/* Edit Button */}
        <button className="edit-btn" onClick={handleEditClick}>
          {isEditing ? 'Save Changes' : 'Edit'}
        </button>
      </div>
    </>
  );
}

export default DashboardAuditProgress;
