import React from 'react';
import { socket } from '../../socket';
import { useState, useEffect } from 'react';
import './Timer.css';
import svg from '../../Assest/Vector.svg';
// import { toast } from 'react-toastify';
import { success } from '../../Utils/SuccessToast';
import 'react-toastify/dist/ReactToastify.css';
import { fetchLocation } from '../../Service/locationService';
import { UserCheckIn, UserCheckOut } from '../../Service/TimerService';

function Timer() {
	const [timer, setTimer] = useState('00:00:00');
	const [isRunning, setIsRunning] = useState(false);
	const [checkInData, setcheckInData] = useState(null);
	const [checkOutData, setcheckOutData] = useState(null);

	useEffect(() => {
		// socket.connect();
	socket.on('startClock', () => {
			socket.emit('checkin');
		});

	

		return () => {
			// socket.disconnect();
			socket.off('startClock');
			socket.off('notifications');
			socket.off('join');
		};
	}, []);

	useEffect(() => {
		socket.on('status', (data) => {
			// console.log(data);
			if (data.status === 'checked-in') {
				setIsRunning(() => {
					return true;
				});
				setTimer(() => {
					return data.timeDifference;
				});
			} else {
				setIsRunning(() => {
					return false;
				});
				setTimer(() => {
					return '00:00:00';
				});
			}
		});

		return () => {
			socket.off('status');
			socket.off('checkin');
			socket.off('checkout');
			socket.off('checkedIn');
		};
	}, []);

	const FetchLocation = async () => {
		fetchLocation().then((data) => {
			setcheckInData({
				checkInLocation: data
			});
		});
	};

	const FetchOutLocation = async () => {
		fetchLocation().then((data) => {
			setcheckOutData({
				checkOutLocation: data   
			});
		});
	};

	// for checkin
	useEffect(() => {
		if (checkInData) {
			UserCheckIn(checkInData)
				.then((data) => {
					setIsRunning(() => {
						return true;
					});
					socket.emit('checkedIn');
					socket.emit('checkin');
					// toast.info('Checkin Successfull', {
					// 	position: 'top-left',
					// 	autoClose: 2000,
					// 	hideProgressBar: false,
					// 	closeOnClick: true,
					// 	pauseOnHover: true,
					// 	draggable: true,
					// 	progress: undefined,
					// 	theme: 'colored'
					// });
					success('Checkin Successfull');
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [checkInData]);

	// for checkout
	useEffect(() => {
		if (checkOutData) {
			UserCheckOut(checkOutData)
				.then((data) => {
					setIsRunning(() => {
						return false;
					});
					socket.emit('checkout');
					// toast.info('CheckOut Successfull', {
					// 	position: 'top-left',
					// 	autoClose: 2000,
					// 	hideProgressBar: false,
					// 	closeOnClick: true,
					// 	pauseOnHover: true,
					// 	draggable: true,
					// 	progress: undefined,
					// 	theme: 'colored'
					// });
					success('CheckOut Successfull');
					setTimer('00:00:00');
				})
				.catch((err) => {
					console.log(err);
				});
		}
		return () => {
			setcheckInData(null);
		};
	}, [checkOutData]);

	const startClock = () => {
		FetchLocation();
	};

	const stopClock = () => {
		FetchOutLocation();
	};

	const reset = () => {
		console.log('reset');
	};

	let [h, m, s] = timer.split(':');

	return (
		<div id='timer' className='timer-div'>
			<div className='timer-content'>
				<h2 className='heading-greet'>
					<span>Welcome Back!</span>
				</h2>
				<p className='timer-text'>Your today's timer</p>
				<div className='timer-clock'>
					<span className='input'>{h}</span>
					<p className='inputcolon'> : </p>
					<span className='input'>{m}</span>
					<p className='inputcolon'> : </p>
					<span className='input'>{s}</span>
				</div>
				<div className='my-3 stopwatch-buttons'>
					{isRunning ? (
						<button
							className='btn  text-light button'
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
							className='btn  text-light button'
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

					<button className='btn btn-primary m-2 button' onClick={reset} style={{ width: '140px', height: '36px', padding: '0' }}>
						Break
					</button>
				</div>
			</div>
			<img className='vector-img' src={svg} alt='vector' />
		</div>
	);
}

export default Timer;
