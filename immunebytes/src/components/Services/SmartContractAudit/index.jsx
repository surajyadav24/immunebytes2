import React from 'react'
import Herosection from '../../Herosection'
import RequestAudit from '../../Request-Audit'
import AuditProcess from '../../Service-Audit-Process'
import FeaturedAudit from '../../Feauture-Audit'
import FeatureSection from '../../Why-us-Feature'
import OtherWeb3Services from '../../Other-Web3-Services'
import EngagementModel from '../../Engagement-Model'
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
 <EngagementModel/>
 <OtherWeb3Services/>
 <FAQ/>
</div>
</>
  )
}

export default SmartContract