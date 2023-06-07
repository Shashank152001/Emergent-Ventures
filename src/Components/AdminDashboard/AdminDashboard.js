import React,{useState,useEffect} from 'react'
import { userData } from '../../Service/DashboardService';
import AdminSidebar from './adminSidebar';
import Loader from '../Spinner/Loader';
import AdminHeader from './adminHeader';
import { Outlet } from 'react-router-dom';

function AdminDashboard() {
  const [userDatas, setUserDatas] = useState(null);

  
	

  return (
    <section className=' main-container'>
			
				<div className='wrapper d-flex'>
					<AdminSidebar />
					<div className='right-sidebar'>
						
						<AdminHeader/>
						
						<div className='right-middle-content'>
							<Outlet />
						</div>
					</div>
				</div>
			
		</section>
  )
}

export default AdminDashboard