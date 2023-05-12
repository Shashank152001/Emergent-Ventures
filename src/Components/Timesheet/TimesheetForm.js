import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDays, eachDayOfInterval, format, subDays, startOfWeek } from 'date-fns';
import { AiOutlinePlus } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import LeftRow from './leftRow';
import RightRow from './rightRow';
import { LoginContext } from '../../Context/LoginContext';
import { CreateTimeSheet, getTimeSheet } from '../../Service/TimesheetService';
import { toast } from 'react-toastify';
import Tabs from '../Timesheet/Tabs';

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
	const [UserTimeSheetData, setUserTimeSheetData] = useState([]);
	const [TimesheetData, setTimeSheetData] = useState({
		totalTime: ''
	});
	// clear all the rows and clear data from the first row in reset

	const [FinalData, setFinalData] = useState([]);
	const [isFilled, setFilled] = useState(false);

	const handlechange = (event) => {
		const { name, value, dataset } = event.target;

		if (dataset.hasOwnProperty('date')) {
			setTimeSheetData((prevData) => ({
				...UserTimeSheetData[dataset.row - 1],
				...prevData,
				date: dataset.date,
				submittedHours: value,
				userId: profileformdata.userId,
				week: `${formattedStartDate} - ${formattedEndDate}`,
				timesheetName: `Timesheet (${formattedStartDate} - ${formattedEndDate})`,
				[name]: value
			}));
		} else {
			setTimeSheetData((prevData) => ({
				...UserTimeSheetData[dataset.row - 1],
				...prevData,
				[name]: value
			}));
		}
	};

	useEffect(() => {
		// console.log(week);
		getTimeSheet(week)
			.then((data) => {
				setRow(data.length);
				setUserTimeSheetData(data);
			})
			.catch((e) => {
				console.log(e.message);
				setUserTimeSheetData([]);
				setRow(1);
			});

		return () => {
			setUserTimeSheetData([]);
		};
	}, [start, end]);

	useEffect(() => {
		if (isFilled) {
			CreateTimeSheet(FinalData)
				.then((data) => {
					navigate('/dashboard/getTimesheet');

					toast.success(`${data.message}`, {
						position: 'top-left',
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored'
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}

		return () => {
			setFilled(false);
		};
	}, [isFilled]);

	const handleSubmit = () => {
		if (FinalData.length === 0 && TimesheetData?.clientName) {
			setFinalData((prevData) => [...prevData, TimesheetData]);
			setFilled(true);
		} else if (FinalData.length && TimesheetData?.clientName) {
			setFinalData((prevData) => [...prevData, TimesheetData]);
			setFilled(true);
		}
	};

	const leftRows = [];
	const rightRows = [];

	for (let i = 1; i <= row; i++) {
		leftRows.push(<LeftRow row={i} key={i} handlechange={handlechange} week={week} start={start} end={end} />);
	}
	for (let i = 1; i <= row; i++) {
		rightRows.push(<RightRow key={i} row={i} handlechange={handlechange} date={date} week={week} start={start} end={end} />);
	}

	const addRow = () => {
		setRow((prevRow) => prevRow + 1);
		setFinalData((prevData) => [...prevData, TimesheetData]);
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
		setSlide(daydate);

		setdate(dd);
	}, [start, end]);

	const nextweek = () => {
		setStart(addDays(start, 7));
		setEnd(addDays(end, 7));
	};

	const prevWeek = () => {
		setStart(subDays(start, 7));
		setEnd(subDays(end, 7));
	};

	return (
		<div className='view-timesheet-container-div'>
			<div className='tabs-div'>
				<Tabs />
			</div>
			<div className='timesheet-content-div'>
				<span className='timesheet-content-title'>Add Timesheet</span>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<div>
						<FontAwesomeIcon onClick={prevWeek} icon={faArrowLeft} style={{ alignSelf: 'center' }} />
						<span style={{ marginRight: '5px', marginLeft: '5px' }}>
							{formattedStartDate} - {formattedEndDate}
						</span>
						<FontAwesomeIcon onClick={nextweek} icon={faArrowRight} style={{ alignSelf: 'center' }} />
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
								{leftRows}
							</table>
						</div>
						<div className='right-table-div'>
							<table className='date-table'>
								<thead>
									<tr>
										<th className='right-table-th'>Work Item</th>
										<th className='right-table-th'>Description</th>
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
								{rightRows}
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
										<td className='date-td-span-col'>
											<span>00:00</span>
										</td>
										<td className='date-td-span-col'>
											<span>00:00</span>
										</td>
										<td className='date-td-span-col'>
											<span>00:00</span>
										</td>
										<td className='date-td-span-col'>
											<span>00:00</span>
										</td>
										<td className='date-td-span-col'>
											<span>00:00</span>
										</td>
										<td className='date-td-span-col'>
											<span>00:00</span>
										</td>
										<td className='date-td-span-col'>
											<span>00:00</span>
										</td>
										<td className='date-td-span-col'>
											<span>00:00</span>
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
							onClick={() => setRow(1)}
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
