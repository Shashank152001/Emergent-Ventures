import React, { useState} from 'react';
import './Dashboard.css';
import Sidebar from './sidebar';
import { LoginContext, RealDataContext } from '../../Context/LoginContext';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function MyDashBoard() {
	
	const [isRealTime, setIsRealTime] = useState(false);
	const [profileformdata, setProfileFormdata] = useState({
		name: '',
		profileImage: '',
		userId: ''
	});

	

	return (
		<LoginContext.Provider value={{ profileformdata, setProfileFormdata }}>
			<RealDataContext.Provider value={{ isRealTime, setIsRealTime }}>
				<section className=' main-container'>
					
						<div className='wrapper d-flex'>
							<Sidebar />
							<div className='right-sidebar '>
								<Header />

								<div className='right-middle-content'>
									<Outlet />
								</div>
							</div>
						</div>
				</section>
			</RealDataContext.Provider>
		</LoginContext.Provider>
	);
}

export default MyDashBoard;
