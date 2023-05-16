import React, { useState, useEffect } from 'react';
import NoRecord from '../Project/norecord';
import { fetchTimeSheet } from '../../Service/TimesheetService';
import Tabs from '../Timesheet/Tabs';
function GetUserTimesheet() {
	const [userTimesheet, setUserTimesheet] = useState(null);
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
						{userTimesheet ? (
							userTimesheet.map((item, index) => (
								<tr key={index}>
									<td style={{ textAlign: 'center' }}>{index + 1}</td>
									<td style={{ textAlign: 'center' }}>
										<span>
											<img style={{ width: '2rem', height: '2rem' }} src={item.profileImage} alt='employee' />
										</span>
										<span> </span>
										{item.hrmid}
										<span> - </span>
										{item.name}
									</td>
									<td style={{ textAlign: 'center' }}>{item.timesheetName}</td>
									<td style={{ textAlign: 'center' }}>{item.date}</td>
									<td style={{ textAlign: 'center' }}>{item.submittedHours}</td>
									<td style={{ textAlign: 'center' }}>{item.approvedHours}</td>
									{item.status === 'Approved' ? (
										<td>
											<i className='bi bi-check-circle-fill text-success ms-2'></i>
										</td>
									) : item.status === 'Rejected' ? (
										<td>
											<i className='bi bi-x-circle-fill text-danger ms-2'></i>
										</td>
									) : (
										<td>
											<i className='bi bi-hourglass text-warning ms-2'></i>
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
			</div>
		</div>
	);
}

export default GetUserTimesheet;
