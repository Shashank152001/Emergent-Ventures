import React, { useState, useEffect } from 'react';
import NoRecord from '../ProjectTable/norecord';
import { fetchTimeSheet } from '../../Service/TimesheetService';
import Tabs from '../Timesheet/Tabs';
import { Pagination } from '@mui/material';

function GetUserTimesheet() {
	const [userTimesheet, setUserTimesheet] = useState(null);
	const [curentPage, setCurrentPage] = useState(1);
	const recordPerPage = 8;
	const lastIndex = curentPage * recordPerPage;
	const firstIndex = lastIndex - recordPerPage;
	const records = userTimesheet && userTimesheet.slice(firstIndex, lastIndex);

	useEffect(() => {
		fetchTimeSheet()
			.then((data) => {
				setUserTimesheet(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	return (
		<div className='view-timesheet-container-div'>
			<div className='tabs-div'>
				<Tabs />
			</div>
			<div className='timesheet-content-div'>
				<span className='timesheet-content-title'>My Timesheets</span>
				<table className='table table-hover' style={{ marginTop: '2rem' }}>
					<thead>
						<tr>
							<td>Sr.No</td>
							<td>Employee</td>
							<td>TimeSheet Name</td>
							<td>Date</td>
							<td>Submitted Hours</td>
							<td>Approved Hours</td>
							<td>Status</td>
						</tr>
					</thead>
					<tbody>
						{records ? (
							records .map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>
										<span>
											<img style={{ width: '2rem', height: '2rem' , borderRadius:'50%' }} src={item.profileImage} alt='employee' />
										</span>
										<span> </span>
										{item.hrmid}
										<span> - </span>
										{item.name}
									</td>
									<td>{item.timesheetName}</td>
									<td>{item.date}</td>
									<td>{item.submittedHours}</td>
									<td>{item.approvedHours}</td>
									{item.status === 'Approved' ? (
										<td>
											<i className='bi bi-check-circle-fill text-success'></i>
										</td>
									) : item.status === 'Rejected' ? (
										<td>
											<i className='bi bi-x-circle-fill text-danger'></i>
										</td>
									) : (
										<td>
											<i className='bi bi-hourglass text-warning'></i>
										</td>
									)}
								</tr>
							))
						) : (
							<>
								<tr>
									<td colSpan='8'>
										<NoRecord />
									</td>
								</tr>
							</>
						)}
					</tbody>
				</table>
				{
				records && 
				<div className='  d-flex justify-content-center align-items-center py-3'>
						<Pagination
							count={Math.ceil(userTimesheet && (userTimesheet.length / recordPerPage))}
							style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							onChange={(event, value) => {
								setCurrentPage(value);
				 }}
				/>
			</div>

			}
			</div>
		</div>
	);
}

export default GetUserTimesheet;
