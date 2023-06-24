import React, { useState, useEffect, useContext } from 'react';
import { fetchReportingTimesheet } from '../../Service/TimesheetService';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import NoRecord from '../Project/norecord';
=======
import NoRecord from '../ProjectTable/NoRecord';
>>>>>>> ce987915ede69be90f64a2a8df249171a08cbd3a
import { RealDataContext } from '../../Context/LoginContext';
import Tabs from './Tabs';

function GetRmTimesheet() {
	const [rmTimesheet, setRmTimesheet] = useState(null);
	const { isRealTime } = useContext(RealDataContext);

	useEffect(() => {
		fetchReportingTimesheet()
			.then((data) => {
				setRmTimesheet(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, [isRealTime]);
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
									<td>
										<span>
											<img style={{ width: '2rem', height: '2rem' }} src={item.profileImage} alt='employee' />
										</span>
										<span> </span>
										{item.hrmid}
										<span> - </span>
										{item.name}
									</td>
									<td>{item.timesheetName}</td>
									<td>{item.submittedHours}</td>
									<td>{item.approvedHours}</td>
									<td>{item.status}</td>

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
