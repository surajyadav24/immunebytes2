import React from 'react'
import ProgressBar from '../Progressbar'
import "./style.css"
function AuditProgress() {
  return (
<>
<div className="audit-progress">
    <h4>Severity Found</h4>
    <ProgressBar label="Critical" color="#ff4d4d" percentage={58} />
    <ProgressBar label="High" color="#ff9966" percentage={70} />
    <ProgressBar label="Medium" color="#ffcc66" percentage={30} />
    <ProgressBar label="Low" color="#66ff66" percentage={60} />
    <ProgressBar label="Informational" color="#66cc66" percentage={90} />
  </div>
</> 
  )
}

export default AuditProgress