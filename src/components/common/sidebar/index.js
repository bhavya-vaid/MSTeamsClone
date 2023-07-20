import React from 'react'
import { SidebarBottom, SidebarData, SidebarMore } from '../../../data/sidebar'
import "./sidebar.css";
import SidebarOption from "./sidebar-option";
function Sidebar() {
  const topOptions=SidebarData;
  const more=SidebarMore;
  const bottomOptions=SidebarBottom
  return (
    <div className='sidebar'>

      <div className='sidebar-top'>
        <div>
          {topOptions.map((option)=>{
            return(
              // option can be any arbitrary name, passing as a prop
              <SidebarOption option={option} isActive={option.name==='Calls'?true:false}/>
          )
          })}
        </div>
        <div>
          <SidebarOption option={more}/>
        </div>
      </div>
      <div className='sidebar-bottom'>
        {bottomOptions.map((option)=>{
          return <SidebarOption option={option} />
        })}
      </div>
    </div>
  )
}

export default Sidebar