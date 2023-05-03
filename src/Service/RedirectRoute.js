import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
const RedirectRoute=()=>{

    
  
    const auth = localStorage.getItem('loggedInUser')
    
   
    return !auth? <Outlet/>:<Navigate to={'/dashboard'}/>
}
export default RedirectRoute