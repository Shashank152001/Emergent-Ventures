import React, { useState, useEffect, useContext } from 'react';
import { fetchReportingTimesheet } from '../../Service/TimesheetService';
import { Link } from 'react-router-dom';
import NoRecord from '../ProjectTable/norecord';
import { RealDataContext } from '../../Context/LoginContext';
import Tabs from './Tabs';
import { Pagination } from '@mui/material';

function GetRmTimesheet() {
	const [rmTimesheet, setRmTimesheet] = useState(null);
	const { isRealTime } = useContext(RealDataContext);
	const [curentPage, setCurrentPage] = useState(1);
	const recordPerPage = 8;
	const lastIndex = curentPage * recordPerPage;
	const firstIndex = lastIndex - recordPerPage;
	const records = rmTimesheet && rmTimesheet.slice(firstIndex, lastIndex);

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
						{records ? (
							records.map((item, index) => (
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
				{
				records && 
				<div className='  d-flex justify-content-center align-items-center py-3'>
						<Pagination
							count={Math.ceil(rmTimesheet.length / recordPerPage)}
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

export default GetRmTimesheet;
