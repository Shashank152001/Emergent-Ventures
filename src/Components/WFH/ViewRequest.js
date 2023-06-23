import React, { useState, useEffect, useContext } from 'react';
import './Wfh.css';
import RequestTabs from './RequestTabs';
import { ReportingGetdata } from '../../Service/LeavesService';
import { Link } from 'react-router-dom';
import NoRecord from '../ProjectTable/NoRecord';
import { RealDataContext } from '../../Context/LoginContext';

function ViewRequest() {
	const [ReportingData, SetReportingData] = useState(null);
	const { isRealTime } = useContext(RealDataContext);

	useEffect(() => {
		ReportingGetdata()
			.then((data) => {
				SetReportingData(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, [isRealTime]);

	return (
		<div className='view-request-container-div'>
			<div className='tabs-div'>
				<RequestTabs />
			</div>
			<div className='request-content-div' style={{ width: '80%' }}>
				<span className='request-content-title'>Approve Requests</span>
				<table className='table table-hover' style={{ marginTop: '2rem' }}>
					<thead>
						<tr>
							<td>Sr.No</td>
							<td>Employee</td>
							<td>Role</td>
							<td>Leave Type</td>
							<td>Start Date</td>
							<td>End Date</td>
							<td>Status</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{ReportingData ? (
							ReportingData.map((item, index) => (
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
									<td>{item.role}</td>
									<td>{item.leaveType}</td>
									<td>{item.startDate}</td>
									<td>{item.endDate}</td>
									<td>{item.status}</td>
									{item.status === 'Pending' ? (
										<>
											<td>
												<Link className='text-decoration-none text-dark' to={`/dashboard/editrequest/${index}`}>
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
									<td colSpan='11'>
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

export default ViewRequest;
