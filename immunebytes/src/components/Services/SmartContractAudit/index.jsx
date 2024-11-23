import React from 'react'
import Herosection from '../../Herosection'
import RequestAudit from '../../Request-Audit'
import AuditProcess from '../../Service-Audit-Process'

function SmartContract() {
  return (
<>
<Herosection/>
<div className="container-fluid">

 <RequestAudit/>
 <AuditProcess/>
</div>
</>
  )
}

export default SmartContract