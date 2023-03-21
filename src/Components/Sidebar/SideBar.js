import React, { useState } from 'react';
import {
    FaUserCircle,
    FaBars,
    FaSearch,
    FaHistory,
    FaBook
}from "react-icons/fa";

import { NavLink } from 'react-router-dom';
import './SideBar.css'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/userdashboard",
            name:"UserDashboard",
            icon:<FaUserCircle/>
        },
        {
            path:"/nutrisearch",
            name:"NutriSearch",
            icon:<FaSearch/>
        },
        
        {
            path:"/trackingactivity",
            name:"TrackingActivity",
            icon:<FaHistory/>
        },
        {
            path:"/mydiary",
            name:"MyDiary",
            icon:<FaBook/>
        }
    ]
    return (
        <div className="containers">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle} style={{'cursor':'pointer'}}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;