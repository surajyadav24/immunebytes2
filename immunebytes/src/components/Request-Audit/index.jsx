import React from "react";
import "./style.css"; 
import PrimaryBtn from '../Primarybutton'
function RequestAudit() {
  return (
<>
<div className="request-audit-container">
<div className="text-content">
  <p>
    Lorem Ipsum is simply dummy text of the printing and{" "}
    <span className="highlight">typesetting industry</span>
  </p>
</div>
<div className="button-container">
<PrimaryBtn text="Request Audit"/>
</div>
</div>
</>
  );
}

export default RequestAudit;
