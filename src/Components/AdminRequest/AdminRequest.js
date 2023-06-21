import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth, addMonths, subMonths } from 'date-fns';
import NoRecord from '../Project/norecord';
import './AdminRequest.css';

const AdminRequest = () => {
	const [date, setDate] = useState(new Date());
	const [start, setStart] = useState(startOfMonth(date)); // start of the month
	const [end, setEnd] = useState(endOfMonth(date)); // end of the month

	const startDate = start.toLocaleDateString('en-GB').split('/');
	const endDate = end.toLocaleDateString('en-GB').split('/');

	const startdate = startDate[2] + '-' + startDate[1] + '-' + startDate[0];
	const formattedStartDate = startDate[0] + '-' + startDate[1] + '-' + startDate[2];
	const formattedEndDate = endDate[0] + '-' + endDate[1] + '-' + endDate[2];

	const nextMonth = () => {
		setDate(() => addMonths(date, 1));
	};

	const previousMonth = () => {
		setDate(() => subMonths(date, 1));
	};

	useEffect(() => {
		setStart(() => startOfMonth(date));
		setEnd(() => endOfMonth(date));
	}, [date]);

	const [requestData, setRequestData] = useState([]);
	// const { date } = useParams();

	// useEffect(() => {
	// 	getRequests(startdate)
	// 		.then((data) => {
	// 			setRequestData(data);
	// 		})
	// 		.catch((e) => {
	// 			console.log(e.message);
	// 		});
	// }, [date, start, end]);

	console.log(requestData);

	return (
		<div className='requests-div'>
			<div className='requests-heading'>Requests</div>
			<div className='month-selector'>
				<FontAwesomeIcon className='arrow' onClick={previousMonth} icon={faArrowLeft} />
				<span className='months-span'>
					{formattedStartDate} - {formattedEndDate}
				</span>
				<FontAwesomeIcon className='arrow' onClick={nextMonth} icon={faArrowRight} />
			</div>
			<div className='requests' style={{ width: '80%' }}>
				<table className='table table-hover' style={{ marginTop: '2rem' }}>
					<thead>
						<tr>
							<td>Sr.No</td>
							<td>Employee</td>
							<td>Request Type</td>
							<td>Leave Type</td>
							<td>Start Date</td>
							<td>End Date</td>
							<td>Status</td>
						</tr>
					</thead>
					<tbody>
						{requestData ? (
							requestData.map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>
										<span>
											<img style={{ width: '2rem', height: '2rem' }} src={item.profileImage} alt='employee' />
										</span>
										<span> </span>
										{item.hrmid}
										<span> - </span>
										{item.name}
									</td>
									<td>{item.request}</td>
									<td>{item.leaveType}</td>
									<td>{item.startDate}</td>
									<td>{item.endDate}</td>
									{item.status === 'Approved' ? (
										<td>
											<i className='bi bi-check-circle-fill text-success '></i>
										</td>
									) : item.status === 'Rejected' ? (
										<td>
											<i className='bi bi-x-circle-fill text-danger '></i>
										</td>
									) : item.status === 'Cancelled' ? (
										<td>
											<i className='bi bi-x-circle-fill text-danger '></i>
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
			</div>
		</div>
	);
};

export default AdminRequest;
