import React from 'react'
import Serviceherosection from '../../Service-Hero-Section'
import RequestAudit from '../../Request-Audit'
import AuditProcess from '../../Service-Audit-Process'
import FeaturedAudit from '../../Feauture-Audit'
import FeatureSection from '../../Why-us-Feature'
import OtherWeb3Services from '../../Other-Web3-Services'
import EngagementModel from '../../Engagement-Model'
import HeroSection2 from '../../Hero-section-2'
import gif1 from "../../../assets/images/Hero-section/hero-gif.gif";
import FAQ from '../../FAQ'
function SmartContract() {
  return (
<>
<HeroSection2
        title="Smart Contract ,"
        highlight="Audit"
        description="Unlock the full potential of your decentralized projects with comprehensive smart contract audits — ensuring security, performance, and trust."
        buttonText="Book Consultation"
        imageSrc={gif1}
        altText="Immunebytes Hero GIF"
      />
<div className="container-fluid">

 <RequestAudit buttonText="Request Audit"/>
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