import React from 'react'
import Herosection from '../../Herosection'
import RequestAudit from '../../Request-Audit'
import AuditProcess from '../../Service-Audit-Process'
import FeaturedAudit from '../../Feauture-Audit'
import FeatureSection from '../../Why-us-Feature'
function SmartContract() {
  return (
<>
<Herosection/>
<div className="container-fluid">

 <RequestAudit/>
 <AuditProcess/>
 <FeaturedAudit/>
 <FeatureSection/>
</div>
</>
  )
}

export default SmartContract