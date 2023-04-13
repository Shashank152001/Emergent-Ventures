import React from 'react';

import { socket } from '../../socket';
import { useState, useEffect } from 'react';
import './Timer.css';
import svg from './Vector.svg';
import { fetchLocation } from '../../Service/locationService';
import { UserCheckIn, UserCheckOut, fetchCurrentCheckinTime } from '../../Service/TimerService';

function Timer() {
	const [time, setTime] = useState(0);
	// Error: do not get this on tab switch
	const [getCheckIn, setGetCheckIn] = useState('00:00:00');

	const [isRunning, setIsRunning] = useState(
		JSON.parse(localStorage.getItem('Running')) || false
	);

	useEffect(() => {
		socket.on('message',(data)=>{
        console.log(data);
    })
	}, []);
	const checkInTime = getCheckIn;
	// console.log(checkInTime);
	const checkInDate = new Date().toISOString().split('T')[0];
	const getTimeDifference = (time, date) => {
		const date1 = new Date(`${date} ${time}`);
		const date2 = new Date();
		console.log(time);
		// console.log(date2);
		// console.log(`${date} ${time}`);
		let diff = Math.abs((date2.getTime() - date1.getTime()) / 1000);
		let seconds = Math.floor(diff) % 60;
		diff /= 60;
		let minutes = Math.floor(diff) % 60;
		diff /= 60;
		let hours = Math.floor(diff) % 24;
		return hours + ':' + minutes + ':' + seconds;
	};
	// console.log(getTimeDifference(checkInTime, checkInDate));

	const [h, m, s] = isRunning
		? getTimeDifference(checkInTime, checkInDate).split(':')
		: [0, 0, 0];
	// console.log(h, m, s);

	const [checkedIn, setcheckedIn] = useState(false);
	const [checkedOut, setcheckedOut] = useState(false);
	const [formData, setFormData] = useState(null);
	const [formDataOut, setFormDataOut] = useState(null);

	const FetchData = async () => {
		const fetchedDate = new Date().toISOString().split('T')[0];
		const fetchedTime = new Date().toLocaleTimeString('en-US', { hour12: false });
		const city = await fetchLocation();

		await setFormData({
			checkInTime: fetchedTime,
			checkInDate: fetchedDate,
			checkInLocation: city
		});
		setcheckedIn(true);
	};

	const FetchOutData = async () => {
		// const city = await fetchLocation();
		const fetchedDate = new Date().toISOString().split('T')[0];
		const fetchedTime = new Date().toLocaleTimeString('en-US', { hour12: false });
		const city = await fetchLocation();

		await setFormDataOut({
			checkOutTime: fetchedTime,
			checkOutDate: fetchedDate,
			checkOutLocation: city
		});

		setcheckedOut(true);
	};

	// for checkin
	useEffect(() => {
		if (formData && checkedIn) {
			UserCheckIn(formData)
				.then((data) => {
					console.log(data);
					setIsRunning(!isRunning);
					// fetchCurrentCheckinTime().then((data) => {
					// 	// console.log(data.data[0].checkInTime.substr(0, 8));
					// 	setGetCheckIn((currentState) => {
					// 		return data.data[0].checkInTime.substr(0, 8);
					// 		// console.log(currentState);
					// 	});
					// });
					localStorage.setItem('Running', JSON.stringify(true));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [formData, checkedIn]);

	// for checkout
	useEffect(() => {
		if (formDataOut && checkedOut) {
			UserCheckOut(formDataOut)
				.then((data) => {
					console.log(data);
					setIsRunning(false);
					localStorage.removeItem('Running', JSON.stringify(false));
				})
				.catch((err) => {
					console.log(err);
				});
		}
		return () => {
			setcheckedIn(false);
		};
	}, [formDataOut, checkedOut]);

	// for timer
	useEffect(() => {
		let intervalId;

		if (isRunning) {
			intervalId = setInterval(() => setTime(time + 1), 1000);
		} else {
			localStorage.removeItem('Running');
		}

		return () => clearInterval(intervalId);
	}, [isRunning, time]);

	const startClock = () => {
		FetchData();
        socket.emit('checkin')

	};

	const stopClock = () => {
		FetchOutData();
    socket.emit('checkout')
	};

	const reset = () => {
		setTime(0);
		localStorage.removeItem('time');
		localStorage.removeItem('Running');
	};

	return (
		<>
			<div id='timer' className=''>
				<div className='timer-container position-relative'>
					<div className='row '>
						<div className='col-md-8'>
							<h2
								className=''
								style={{ paddingTop: '0.8rem', paddingBottom: '1rem' }}
							>
								Welcome Back!
							</h2>
							<p className='text-secondary' style={{ fontWeight: 'bold' }}>
								Your today's timer
							</p>
							<div className='timer d-flex '>
								<span className='input'>
									{isRunning ? Math.abs(h).toString().padStart(2, '0') : '00'}
								</span>
								<p className='inputcolon'> : </p>
								<span className='input'>
									{isRunning ? Math.abs(m).toString().padStart(2, '0') : '00'}
								</span>
								<p className='inputcolon'> : </p>
								<span className='input'>
									{isRunning ? Math.abs(s).toString().padStart(2, '0') : '00'}
								</span>
							</div>
							<div className='my-3 stopwatch-buttons'>
								{isRunning ? (
									<button
										className='btn  text-light'
										onClick={stopClock}
										style={{
											backgroundColor: 'red',
											width: '140px',
											height: '36px',
											padding: '0'
										}}
									>
										Checkout
									</button>
								) : (
									<button
										className='btn  text-light'
										onClick={startClock}
										style={{
											backgroundColor: 'green',
											width: '140px',
											height: '36px',
											padding: '0'
										}}
									>
										CheckIn
									</button>
								)}

								<button
									className='btn btn-primary m-2'
									onClick={reset}
									style={{ width: '140px', height: '36px', padding: '0' }}
								>
									Break
								</button>
							</div>
						</div>
						<div
							className='col-md-4'
							style={{
								position: 'relative',
								top: '28px',
								right: '-11px'
							}}
						>
							<img
								src={svg}
								alt='vector'
								style={{
									mixBlendMode: 'color-burn'
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Timer;
