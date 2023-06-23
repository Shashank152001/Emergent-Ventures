import { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth } from 'date-fns';
import './AdminTimesheet.css';
import NoRecord from '../ProjectTable/NoRecord';
import { getTimesheetData } from '../../Service/adminServices/timesheetService';

const AdminTimesheet = () => {
	const [timesheetData, setTimesheetData] = useState(null);
	const [startDate, setStartDate] = useState(startOfMonth(new Date()).toLocaleDateString('en-GB').split('/').reverse().join('-'));
	const [endDate, setEndDate] = useState(endOfMonth(new Date()).toLocaleDateString('en-GB').split('/').reverse().join('-'));

	const handleChange = (event) => {
		const { value, name } = event.target;
		if (name === 'startdate') {
			setStartDate(value);
		} else {
			setEndDate(value);
		}
	};

	useEffect(() => {
		getTimesheetData(startDate, endDate)
			.then((data) => {
				console.log(data);
				setTimesheetData(data);
			})
			.catch((e) => {
				setTimesheetData(null);
			});
	}, [startDate, endDate]);

	return (
		<div className='timesheets-div'>
			<div className='timesheets-heading'>Timesheets</div>
			<div className='timesheets-range-input-div'>
				<h6 className='timesheets-range-input-heading'>Select Range</h6>
				<input className='timesheets-range-input' type='date' name='startdate' onChange={handleChange} value={startDate} />
				<input className='timesheets-range-input' type='date' name='enddate' onChange={handleChange} value={endDate} />
			</div>

			<div className='admin-timesheets-div'>
				<table className='admin-timesheets-table'>
					<thead>
						<tr className='admin-timesheets-table-row'>
							<td className='table-heading'>Sr.No</td>
							<td className='table-heading'>Employee</td>
							<td className='table-heading'>TimeSheet Name</td>
							<td className='table-heading center-data'>Submitted Hours</td>
							<td className='table-heading center-data'>Approved Hours</td>
							<td className='table-heading center-data'>Status</td>
						</tr>
					</thead>
					<tbody>
						{timesheetData ? (
							timesheetData.map((item, index) => (
								<tr key={index} className='admin-timesheets-table-row'>
									<td className='table-data-text'>{index + 1}</td>
									<td className='table-data-text'>
										<img className='employee-profile-image' src={item?.profileImage} alt='employee' />
										<span className='span-margin'></span>
										{item?.hrmid}
										<span className='span-margin'></span>
										{item?.name}
									</td>
									<td className='table-data-text'>{item?.timesheetName}</td>
									<td className='table-data-text center-data'>{item?.submittedHours}</td>
									<td className='table-data-text center-data'>{item?.approvedHours}</td>
									{item?.status === 'Approved' ? (
										<td className='table-data-text center-data'>
											<i className='bi bi-check-circle-fill text-success '></i>
										</td>
									) : item?.status === 'Rejected' ? (
										<td className='table-data-text center-data'>
											<i className='bi bi-x-circle-fill text-danger '></i>
										</td>
									) : item?.status === 'Cancelled' ? (
										<td className='table-data-text center-data'>
											<i className='bi bi-x-circle-fill text-danger '></i>
										</td>
									) : (
										<td className='table-data-text center-data'>
											<i className='bi bi-hourglass text-warning'></i>
										</td>
									)}
								</tr>
							))
						) : (
							<>
								<tr className='admin-timesheets-table-row'>
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
};

export default AdminTimesheet;
