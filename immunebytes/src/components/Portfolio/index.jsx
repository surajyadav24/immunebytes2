import React from 'react'
import Header from '../Header'
import AuditSection from '../Audit-Section'
import PortfolioTable from '../PortfolioTable'
import Ctacomponents from '../Cta-components'
import './style.css'
import StatsSection from '../StatsComponent'
import Footer from '../Footer'
function Portfolio() {
  return (
<>
<Header/>
<AuditSection/>
<PortfolioTable showEditButton={false} />
<div className="por-cta">
<StatsSection/>
<Ctacomponents title="Leading the Wave of Web3 Security"/>
<div className="secure-audit">
<h2>
Stay Ahead of the Security Curve.
</h2>
</div>
<Footer/>
</div>
</>
  )
}

export default Portfolio