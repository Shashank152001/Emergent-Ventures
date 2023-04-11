import React from 'react'
import './DropDown.css'
import { useNavigate } from 'react-router-dom'
import {logOut} from '../../Service/DashboardService'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DropDown = () => {
    const navigate=useNavigate()
    function handleLogOut(){
        logOut().then((data) => {
            console.log(data);
            // sessionStorage.clear();
            
            localStorage.removeItem('loggedInUser');
            navigate("/");
            toast.success('Logout Successfull', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
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
            <li>
            <button className="btn btn-danger mt-1" onClick={handleLogOut}>
                  Logout
            </button>
            </li>
        </ul>
    </div>
  )
}
