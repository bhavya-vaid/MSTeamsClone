import React from 'react'
import './sidebar-option.css';
// prop called option 
//Whatever option is passed will be accepted here, passed form index.js
function SidebarOption({option, isActive}) {
  const classList= isActive?'sidebar-option active':"sidebar-option";
  return (
    <div className={classList}>
        <div className='sidebar-icon'>
          {option.icon}
        </div>
       {/* checking if option had name then only make it visible */}
        {option.name&&<label className='sidebar-label'>{option.name}</label>}
    </div>
  )
}

export default SidebarOption

