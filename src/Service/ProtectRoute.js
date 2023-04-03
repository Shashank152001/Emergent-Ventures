import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
const ProtectRoute=()=>{
    // const authenticationData = JSON.parse(localStorage.getItem('loggedInUser'))
    const auth = localStorage.getItem('loggedInUser')
    // console.log(authenticationData)
    return auth? <Outlet/>:<Navigate to={'/'}/>
}
export default ProtectRoute