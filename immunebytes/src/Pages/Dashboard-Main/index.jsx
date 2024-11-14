import React from 'react'
import DashboardHeader from '../Dashboard-Header'
import Sidebar from '../Dashboard-Sidebar'
import './style.css'

function DashboardMain() {
  return (
<>
<div className="main-contaner">
<Sidebar/>
<DashboardHeader/>

</div>
</>
  )
}

export default DashboardMain