import React, { useEffect, useState, useContext, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDays, eachDayOfInterval, format, subDays, startOfWeek } from 'date-fns';
import { AiOutlinePlus } from 'react-icons/ai';
import { socket } from '../../socket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
import LeftRow from './leftRow';
import RightRow from './rightRow';
import { LoginContext } from '../../Context/LoginContext';
import { CreateTimeSheet, getTimeSheet } from '../../Service/TimesheetService';
import Tabs from '../Timesheet/Tabs';
// ../../Utils/GetTemplate
import { timesheetTemplate, reduceFetchedTimeSheetData, finalWorkingHours, formatTotalTime } from '../../Utils/getTemplate';
import { totalTimesheetRecords, finalTimesheetData } from '../../Utils/templateRecords';
=======
import { LoginContext } from '../../Context/LoginContext';
import { CreateTimeSheet, getTimeSheet } from '../../Service/TimesheetService';
import { timesheetTemplate, reduceFetchedTimeSheetData, finalWorkingHours, formatTotalTime } from '../../Utils/GetTemplate';
import { totalTimesheetRecords, finalTimesheetData } from '../../Utils/TemplateRecords';
import LeftRow from './LeftRow';
import RightRow from './RightRow';
import Tabs from '../Timesheet/Tabs';
>>>>>>> ce987915ede69be90f64a2a8df249171a08cbd3a

const Timesheetform = () => {
	const navigate = useNavigate();
	const [start, setStart] = useState(startOfWeek(new Date(), { weekStartsOn: 0 })); // start of the week
	const [end, setEnd] = useState(addDays(start, 6)); // end of the week
	const [slide, setSlide] = useState([]);
	const [date, setdate] = useState([]);
	const [row, setRow] = useState(1);
	const startDate = start.toLocaleDateString('en-GB').split('/');
	const endDate = end.toLocaleDateString('en-GB').split('/');
	let formattedStartDate = startDate[0] + '-' + startDate[1] + '-' + startDate[2];
	let formattedEndDate = endDate[0] + '-' + endDate[1] + '-' + endDate[2];
	let week = `${formattedStartDate} - ${formattedEndDate}`;
	const { profileformdata } = useContext(LoginContext);
	const [isFilled, setFilled] = useState(false);
	const [totalHours, setTotalHours] = useState({});
	const trackRow = useRef(1);
	const dateTrack = useRef([]);
	const [userTimeSheetData, setUserTimeSheetData] = useState([]);
	const [userFinalData, setUserFinalData] = useState([]);
	const [isReset, setReset] = useState(false);

	const handlechange = (event) => {
		let timeValue = '';
		const { name, value, dataset } = event.target;
		if (name === 'totalTime') {
			timeValue = formatTotalTime(value);
		}
		const tempdata = userFinalData;
		const currentData = tempdata[dataset.row - 1];

		for (let i = 0; i < currentData.length; i++) {
			if (currentData[i]?.date === dataset.date && currentData[i].timesheetId === parseInt(dataset.row)) {
				currentData[i] = {
					...currentData[i],
					submittedHours: name === 'totalTime' && timeValue.split(':')[1] ? timeValue : value,
					[name]: name === 'totalTime' && timeValue.split(':')[1] ? timeValue : value.trim()
				};
				break;
			} else {
				if (name !== 'totalTime') {
					currentData[i] = {
						...currentData[i],
						[name]: value.trim(),
						userId: profileformdata.userId
					};
				}
			}
		}
		tempdata[dataset.row - 1] = currentData;
		setUserFinalData(tempdata);
	};

	useEffect(() => {
		const daydate = eachDayOfInterval({ start: start, end: end }).map((date) => {
			const monthDate = format(date, 'LLL dd');
			const weekDay = format(date, 'EEE ');
			return { monthDate: monthDate, weekDay: weekDay };
		});

		const dd = eachDayOfInterval({ start: start, end: end }).map((date) => {
			const [Date, month, year] = date.toLocaleDateString('en-GB').split('/');

			return `${year}-${month}-${Date}`;
		});

		dateTrack.current = dd;
		setdate(dd);
		setSlide(daydate);
	}, [start, end]);

	// post data to the server
	useEffect(() => {
		if (isFilled) {
			const finalTimesheetRecord = finalTimesheetData(userFinalData, userTimeSheetData);
			CreateTimeSheet(finalTimesheetRecord)
				.then((data) => {
					socket.emit('sendNotifications', 'hello timesheet');
					navigate('/dashboard/getTimesheet');
				})
				.catch((err) => {
					console.log(err);
				});
		}

		return () => {
			setFilled(false);
		};
	}, [isFilled]);

	// getTimesheetData
	useEffect(() => {
		getTimeSheet(week)
			.then((data) => {
				const totalHour = finalWorkingHours(data);
				const newRecordsLength = reduceFetchedTimeSheetData(data).length;
				const totalTimesheet = totalTimesheetRecords(data, newRecordsLength, dateTrack.current, formattedStartDate, formattedEndDate, profileformdata?.userId);
				trackRow.current = newRecordsLength;
				setUserTimeSheetData(data);
				setUserFinalData(() => [...totalTimesheet]);
				setTotalHours(totalHour);
				setRow(newRecordsLength);
			})
			.catch((err) => {
				const initialData = timesheetTemplate(dateTrack.current, 1, formattedStartDate, formattedEndDate, profileformdata?.userId);

				setUserFinalData(() => [initialData]);
				setTotalHours({
					finalTotalHours: 0,
					finalTotalMinutes: 0
				});
				setRow(1);
				trackRow.current = 1;
			});
	}, [start, end, isReset]);

	const handleSubmit = () => {
		if (userFinalData.length) {
			setFilled(true);
		}
	};

	// left and right table row

	const leftRows = [];
	const rightRows = [];

	for (let i = 1; i <= row; i++) {
		leftRows.push(<LeftRow row={i} key={i} handlechange={handlechange} week={week} start={start} end={end} />);
		rightRows.push(
			<RightRow key={i} row={i} handlechange={handlechange} date={date} week={week} start={start} end={end} slide={slide} userFinalData={userFinalData} setUserFinalData={setUserFinalData} />
		);
	}

	// add one more row in the table
	const addRow = () => {
		setRow((prevRow) => prevRow + 1);
		const newCreatedRow = timesheetTemplate(date, trackRow.current + 1, formattedStartDate, formattedEndDate, profileformdata?.userId);
		setUserFinalData((prevData) => [...prevData, newCreatedRow]);
		trackRow.current = trackRow.current + 1;
	};

	//nextWeek
	const nextweek = useCallback(() => {
		setStart(addDays(start, 7));
		setEnd(addDays(end, 7));
	}, [start, end]);

	// prevWeek
	const prevWeek = useCallback(() => {
		setStart(subDays(start, 7));
		setEnd(subDays(end, 7));
	}, [start, end]);

	return (
		<div className='view-timesheet-container-div'>
			<div className='tabs-div'>
				<Tabs />
			</div>
			<div className='timesheet-content-div' style={{ overflowY: 'auto' }}>
				<span className='timesheet-content-title'>Add Timesheet</span>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<div>
						<FontAwesomeIcon onClick={prevWeek} icon={faArrowLeft} style={{ alignSelf: 'center', marginRight: '0.6rem' }} />
						<span
							style={{
								display: 'inline-block',
								width: '13.5rem',
								textAlign: 'center',
								padding: '0.1rem'
							}}
						>
							{formattedStartDate} - {formattedEndDate}
						</span>
						<FontAwesomeIcon onClick={nextweek} icon={faArrowRight} style={{ alignSelf: 'center', marginLeft: '0.3rem' }} />
					</div>
				</div>
				<div className='timesheet-container' style={{ display: 'flex', flexDirection: 'column' }}>
					<div className='outer-table-div'>
						<div className='left-table-div'>
							<table>
								<thead>
									<tr>
										<th className='sr-th'>S.No</th>
										<th className='left-table-th'>Client Name</th>
										<th className='left-table-th'>Project Name</th>
										<th className='left-table-th'>Job Name</th>
									</tr>
								</thead>

								<tbody>{leftRows}</tbody>
							</table>
						</div>
						<div className='right-table-div'>
							<table className='date-table'>
								<thead>
									<tr>
										<th className='right-table-th'>Work Item</th>
										<th className=''></th>
										<th className='right-table-th'>Billable Status</th>
										{slide.map((day, index) => (
											<th className='date-th' key={index}>
												{day.monthDate}
												<br />
												{day.weekDay}
											</th>
										))}
										<th className='date-th'>Total</th>
									</tr>
								</thead>
								<tbody>{rightRows}</tbody>

								<tbody>
									<tr>
										<td>
											<span className='right-table-td'></span>
										</td>
										<td>
											<span className='right-table-td'></span>
										</td>
										<td style={{ textAlign: 'left', paddingLeft: '1.3rem' }}>
											<span>Total</span>
										</td>

										{date.map((day, index) => (
											<td key={index} className='date-td-span-col'>
												<span>
													{totalHours[day]?.hour ? String(totalHours[day]?.hour + parseInt(totalHours[day]?.min / 60)).padStart(2, 0) : '00'}:
													{totalHours[day]?.min ? String(totalHours[day]?.min % 60).padStart(2, 0) : '00'}
												</span>
											</td>
										))}

										<td className='date-td-span-col'>
											<span>
												{totalHours?.finalTotalHours ? String(totalHours?.finalTotalHours + parseInt(totalHours?.finalTotalMinutes / 60)).padStart(2, 0) : '00'}:
												{totalHours?.finalTotalMinutes ? String(totalHours?.finalTotalMinutes % 60).padStart(2, 0) : '00'}
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							marginBottom: '3rem'
						}}
					>
						<button onClick={addRow} className='border-0 bg-white' style={{ marginLeft: '1rem' }}>
							{' '}
							<AiOutlinePlus className='text-primary' />
							<span className='text-primary'>Add Row</span>
						</button>
					</div>
					<div style={{ display: 'flex', gap: '2rem' }}>
						<button
							onClick={handleSubmit}
							className='bg-success btn'
							style={{
								textAlign: 'center',
								width: '200px',
								height: '40px',
								color: '#fff',
								outline: 'none',
								border: 'none',
								marginLeft: '1rem'
							}}
						>
							Save
						</button>
						<button
							className='btn'
							style={{
								textAlign: 'center',
								width: '200px',
								height: '40px',
								color: '#fff',
								outline: 'none',
								border: 'none',
								backgroundColor: '#283055'
							}}
							onClick={() => setReset(!isReset)}
						>
							Reset
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timesheetform;
