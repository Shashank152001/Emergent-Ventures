import React from 'react';
import { NavLink } from 'react-router-dom';
function RequestTabs() {
	return (
		<nav className='request-tabs-nav-div'>
			<span style={{ marginBottom: '1rem', fontWeight: 'bold', color: 'rgb(80, 80, 80)', padding: '0.4rem' }}>Requests</span>
			<NavLink
				className={(navData) => (navData.isActive ? 'active-request-tab' : 'inactive-request-tab')}
				to='/dashboard/getRequest'
				style={{ textDecoration: 'none', marginBottom: '0.8rem', fontSize: '0.9rem', padding: '0.3rem', borderRadius: '2px', color: 'black' }}
			>
				<span>View</span>
			</NavLink>
			<NavLink
				className={(navData) => (navData.isActive ? 'active-request-tab' : 'inactive-request-tab')}
				to='/dashboard/viewRequest'
				style={{ textDecoration: 'none', marginBottom: '0.8rem', fontSize: '0.9rem', padding: '0.3rem', borderRadius: '2px', color: 'black' }}
			>
				<span>Approve</span>
			</NavLink>
			<NavLink
				className={(navData) => (navData.isActive ? 'active-request-tab' : 'inactive-request-tab')}
				to='/dashboard/leave'
				style={{ textDecoration: 'none', fontSize: '0.9rem', padding: '0.3rem', borderRadius: '2px', color: 'black' }}
			>
				<span>Add</span>
			</NavLink>
		</nav>
	);
}

export default RequestTabs;
