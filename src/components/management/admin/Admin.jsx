import React from 'react'
import "./admin.css"
import { Link, Outlet } from 'react-router-dom'

export default function () {

  return (
    <div className='container'>
      <div className='title'>
        <h2>Admin Dashboard</h2>
        <p style={{fontWeight:500}}>All Member, Care Givers, Volunteer, Partner, Rider And Donator Data Are Shown Below.</p>
      </div>
      <div className='flex-btn'>
        <nav>
          <Link to='member'><button className='memeber button'>Members</button></Link>
          <Link to='caregiver'><button className='memeber button'>Care Givers</button></Link>
          <Link to='volunteer'><button className='memeber button'>Volunteers</button></Link>
          <Link to='partner'><button className='memeber button'>Partners</button></Link>
          <Link to='donator'><button className='memeber button'>Dontators</button></Link>
          <Link to='rider'><button className='memeber button'>Riders</button></Link>
        </nav>
      </div>
      
        <Outlet />
      
    </div>
  )
}

