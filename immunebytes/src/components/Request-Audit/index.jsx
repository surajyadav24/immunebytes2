import React from "react";
import "./style.css"; 
import PrimaryBtn from '../Primarybutton'
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
<PrimaryBtn text={buttonText} />
</div>
</div>
</>
  );
}

export default RequestAudit;
