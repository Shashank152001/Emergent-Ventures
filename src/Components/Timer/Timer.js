import React from 'react';

import { socket } from '../../socket';
import { useState, useEffect } from 'react';
import './Timer.css';
import svg from './Vector.svg';
import { fetchLocation } from '../../Service/locationService';
import { UserCheckIn, UserCheckOut, fetchCurrentCheckinTime } from '../../Service/TimerService';

function Timer() {

	const [timer, setTimer] = useState('00:00:00');
	const [isRunning, setIsRunning] = useState(false);
    // const [checkedIn, setcheckedIn] = useState(false);
	// const [checkedOut, setcheckedOut] = useState(false);
	const [formData, setFormData] = useState(null);
	const [formDataOut, setFormDataOut] = useState(null);
    const [h, m, s] = timer.split(':');



	// useEffect(() => {
		
	// 	// fetchCurrentCheckinTime().then((data) => {
		
	// 	// 	if (data.data[0].status === 'checked-in') {

	// 	// 		socket.on('message', (data) => {
	// 	// 			console.log(data);
	// 	// 			setTimer((prevTimer) => {
	// 	// 				return prevTimer = data;
	// 	// 			});
	// 	// 		});
	// 			// setIsRunning((prevState) => {
	// 			// 	return !prevState;
	// 			// });
	// 		// } else {
	// 		// 	setIsRunning((prevState) => {
	// 		// 		return !prevState;
	// 		// 	});
	// 		}
	// 	});
	// }, []);


	useEffect(()=>{

		console.log(socket);

		// socket.on('join');

		socket.on('status',(data)=>{
			 console.log(data);
		  if(data === 'checked-in'){
            //  console.log("checking status",isRunning)
			//  socket.emit('checkin-status');
			// setIsRunning((prevState) => {
			//   return prevState;
			// });

			console.log("inside checkin")

			setIsRunning(() => {
				return true;
			});

			socket.on('message', (data) => {
				console.log(data);
				setTimer((prevTimer) => {
					return prevTimer = data;
				});
				// setTimer(() => {
				// 	return data;
				// });
				
			});
		  }
		//   else{
		// 	setIsRunning(() => {
		// 	  return false;
		// 	});
		// 	setTimer((prevTimer) => {
		// 		return prevTimer='00:00:00';
		// 	});
		//   }
	})

	return () => {
		socket.off('status');
		socket.off('message');
	  }

	},[socket,isRunning])
 

	// useEffect(() => {
	// 	socket.on('message', (data) => {
	// 		console.log(data);
	// 		setTimer((prevTimer) => {
	// 			return prevTimer = data;
	// 		});
	// 		// setIsRunning((prevState) => {
	// 		// 	return !prevState;
	// 		// });
	// 	});

	// 	return () => {
	// 		socket.off('message');
	// 	  }
	// }, [socket]);



	const FetchData = async () => {
		const fetchedDate = new Date().toISOString().split('T')[0];
		const fetchedTime = new Date().toLocaleTimeString('en-US', { hour12: false });
		const city = await fetchLocation();
		// const city = "bhopal";

		setFormData({
			checkInTime: fetchedTime,
			checkInDate: fetchedDate,
			checkInLocation: city
		});
		// setcheckedIn((prevState)=> !prevState);
	};

	const FetchOutData = async () => {
		const fetchedDate = new Date().toISOString().split('T')[0];
		const fetchedTime = new Date().toLocaleTimeString('en-US', { hour12: false });
		const city = await fetchLocation();
    // const city = "bhopal";

		setFormDataOut({
			checkOutTime: fetchedTime,
			checkOutDate: fetchedDate,
			checkOutLocation: city
		});

		// setcheckedOut((prevState)=>!prevState);
	};

	// for checkin
	useEffect(() => {
		if (formData ) {
			
			UserCheckIn(formData)
				.then((data) => {
					setIsRunning(() => {
						return true;
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [formData]);

	// for checkout
	useEffect(() => {
		if (formDataOut ) {
			
			UserCheckOut(formDataOut)
				.then((data) => {
					setIsRunning((prevState) => {
						return !prevState;
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
		
	}, [formDataOut]);

	const startClock =  () => {
		FetchData();
		if (socket.connected) {
			socket.emit('checkin');
		} else {
			socket.connect();
			// socket.emit('checkin');

		}
	};

	const stopClock = () => {
		FetchOutData();
		socket.emit('checkout');
		// socket.on('demo',(data)=>{
		// 	console.log(data);
		// })
	};

	const reset = () => {
		console.log('reset');
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
								<span className='input'>{h}</span>
								<p className='inputcolon'> : </p>
								<span className='input'>{m}</span>
								<p className='inputcolon'> : </p>
								<span className='input'>{s}</span>
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
