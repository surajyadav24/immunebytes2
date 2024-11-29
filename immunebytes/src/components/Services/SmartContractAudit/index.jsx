import React from 'react'
import Herosection from '../../Herosection'
import RequestAudit from '../../Request-Audit'
import AuditProcess from '../../Service-Audit-Process'
import FeaturedAudit from '../../Feauture-Audit'
import FeatureSection from '../../Why-us-Feature'
import FAQ from '../../FAQ'
function SmartContract() {
  return (
<>
<Herosection/>
<div className="container-fluid">

 <RequestAudit/>
 <AuditProcess/>
 <FeaturedAudit/>
 <FeatureSection/>
 <FAQ/>
</div>
</>
  )
}

export default SmartContract