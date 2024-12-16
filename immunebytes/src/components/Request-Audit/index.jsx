import React from "react";
import "./style.css"; 
import PrimaryBtn from '../Primarybutton'
function RequestAudit({buttonText}) {
  return (
<>
<div className="request-audit-container">
<div className="text-content">
  <p>
  Get your smart contracts audited today and build a 
  {" "}
    <span className="highlight">safer tomorrow.</span>
  </p>
</div>
<div className="button-container">
<PrimaryBtn text={buttonText} />
</div>
</div>
</>
  );
}

export default RequestAudit;
