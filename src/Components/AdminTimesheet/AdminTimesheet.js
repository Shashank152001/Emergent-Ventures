import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth, addMonths, subMonths } from 'date-fns';
import './AdminTimesheet.css';

const AdminTimesheet = () => {
	const [date, setDate] = useState(new Date());
	const [start, setStart] = useState(startOfMonth(date)); // start of the month
	const [end, setEnd] = useState(endOfMonth(date)); // end of the month

	const startDate = start.toLocaleDateString('en-GB').split('/');
	const endDate = end.toLocaleDateString('en-GB').split('/');

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

	return (
		<div className='timesheets-div'>
			<div className='timesheets-heading'>Timesheets</div>
			<div className='month-selector'>
				<FontAwesomeIcon className='arrow' onClick={previousMonth} icon={faArrowLeft} />
				<span className='months-span'>
					{formattedStartDate} - {formattedEndDate}
				</span>
				<FontAwesomeIcon className='arrow' onClick={nextMonth} icon={faArrowRight} />
			</div>
			<div className='timesheets'></div>
		</div>
	);
};

export default AdminTimesheet;
