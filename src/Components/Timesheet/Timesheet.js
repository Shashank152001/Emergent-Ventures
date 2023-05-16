import React, { useState, useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import './Timesheet.css';
import NoRecord from '../Project/norecord';
import { fetchTimeSheet } from '../../Service/TimesheetService';

function Timesheet() {
	const [timesheet, setTimesheet] = useState(null);

	useEffect(() => {
		fetchTimeSheet()
			.then((data) => {
				// console.log(data);
				setTimesheet(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	return (
		<section className='timesheet-container'>
			<div id='timesheet' style={{ padding: '0.6rem' }}>
				<div className='skills-heading'>
					<h1 style={{ fontSize: '1.5rem' }}>My Timesheets</h1>
				</div>
				<table className='dashboard-timesheet-content-div'>
					<tbody className='dashboard-timesheet-tbody-div'>
						{timesheet ? (
							timesheet.map((ele, index) => (
								<tr key={index} className='dashboard-timesheet-card'>
									<td className='dashboard-timesheet-tick'>{ele.status === 'Pending' ? <BsCheckCircleFill className='not-checked' /> : <BsCheckCircleFill className='checked' />}</td>
									<td className='dashboard-timesheet-name-div'>
										<img className='dashboard-timesheet-profile-img' src={ele.profileImage} alt='employee' />
										<span className='dashboard-timesheet-name'>{ele.timesheetName}</span>
									</td>
									<td className='dashboard-week-div'>
										<span className='dashboard-week-start'>{`${ele.week.split(' - ')[0]} -`}</span>
										<span className='dashboard-week-end'>{ele.week.split(' - ')[1]}</span>
									</td>
									<td className='dashboard-submitted-hours-div'>
										<span>{ele?.submittedHours || '00'}</span>
										<span>Submitted Hours</span>
									</td>
									<td className='dashboard-approved-hours-div'>
										<span>{ele?.approvedHours || '00'}</span>
										<span>Approved Hours</span>
									</td>
								</tr>
							))
						) : (
							<div className='dashboard-no-record-div'>
								<NoRecord />
							</div>
						)}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default Timesheet;
