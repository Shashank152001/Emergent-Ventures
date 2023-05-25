import React from 'react'
import './DropDown.css'
import { useNavigate } from 'react-router-dom'
import {logOut} from '../../Service/DashboardService'
import { success } from '../../Utils/SuccessToast';

export const DropDown = () => {
    const navigate=useNavigate()
    function handleLogOut(){
        logOut().then((data) => {
            localStorage.clear();
            navigate("/");
             success(data.message)
          });
    }
  return (
    <div className='flex flex-col dropDownProfile'>
        <ul className='flex flex-col gap-4'>
            {/* <li>
                Profile
            </li>
            <li>
                Setting
            </li> */}
            <li  style={{listStyle:'none'}}>
            <button className="btn btn-danger mt-1" onClick={handleLogOut}>
                  Logout
            </button>
            </li>
        </ul>
    </div>
  )
}
