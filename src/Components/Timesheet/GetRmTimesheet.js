import React, { useState, useEffect } from 'react';
import { fetchReportingTimesheet } from '../../Service/TimesheetService';
import { Link } from 'react-router-dom';
import NoRecord from '../Project/norecord';
import Tabs from './Tabs';
function GetRmTimesheet() {
	const [rmTimesheet, setRmTimesheet] = useState(null);
	useEffect(() => {
		fetchReportingTimesheet()
			.then((data) => {
				setRmTimesheet(data);
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
				<span className='timesheet-content-title'>Approve Timesheets</span>
				<table className='table table-hover' style={{ marginTop: '2rem' }}>
					<thead>
						<tr>
							<td>Sr.No</td>
							<td>Employee</td>
							<td>TimeSheet Name</td>
							<td>Submitted Hours</td>
							<td>Approved Hours</td>
							<td>Status</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{rmTimesheet ? (
							rmTimesheet.map((item, index) => (
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
									<td style={{ textAlign: 'center' }}>{item.submittedHours}</td>
									<td style={{ textAlign: 'center' }}>{item.approvedHours}</td>
									<td style={{ textAlign: 'center' }}>{item.status}</td>

									{item.status === 'Pending' ? (
										<>
											<td>
												<Link className='text-decoration-none text-dark' to={`/dashboard/editTime/${index}`}>
													<i className='bi bi-pen-fill ms-2'></i>
												</Link>
											</td>
										</>
									) : item.status === 'Approved' ? (
										<td>
											<i className='bi bi-check-circle-fill text-success ms-2'></i>
										</td>
									) : (
										<td>
											<i className='bi bi-x-circle-fill text-danger ms-2'></i>
										</td>
									)}
								</tr>
							))
						) : (
							<>
								<tr>
									<td colSpan='9'>
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

export default GetRmTimesheet;
