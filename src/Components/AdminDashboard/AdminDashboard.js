import { Outlet } from 'react-router-dom';
import AdminSidebar from './adminSidebar';
import AdminHeader from './adminHeader';

function AdminDashboard() {
	return (
		<section className=' main-container'>
			<div className='wrapper d-flex'>
				<AdminSidebar />
				<div className='right-sidebar'>
					<AdminHeader />

					<div className='right-middle-content'>
						<Outlet />
					</div>
				</div>
			</div>
		</section>
	);
}

export default AdminDashboard;
