import React from "react";
import "./style.css"; 
import PrimaryBtn from '../Primarybutton'
import Formpopup from "../Formpopup";
import iconarrow from '../../assets/images/arrowicon.svg'

function RequestAudit({buttonText , text, spantext}) {
  return (
<>
<div className="request-audit-container">
<div className="text-content">
  <p>
 {text}
  {" "}
    <span className="highlight">{spantext}</span>
  </p>
</div>
<div className="button-container">
<Formpopup
          auditName="Request Audit"
          buttonClassName="btn btn-primary"
          arrowicon={iconarrow} // Pass the imported icon
        />
</div>
</div>
</>
  );
}

export default RequestAudit;
