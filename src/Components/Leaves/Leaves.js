import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import { availableRequest } from '../../Service/LeavesService';
import './Leaves.css';

const Leaves = () => {
	const [availableLeaveData, setAvailableLeaveData] = useState({});

	useEffect(() => {
		availableRequest()
			.then((data) => {
				setAvailableLeaveData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div id='leaves' className=''>
				<div className='leaves-container'>
					<div className='row h-100' style={{ borderRadius: '25px' }}>
						<div className='col-md-12 ' style={{ padding: '0.4rem' }}>
							<h6
								className=''
								style={{
									paddingLeft: '0',
									fontWeight: 'bold'
								}}
							>
								My Leaves{' '}
							</h6>
						</div>
						<div className='' style={{ height: '100%', maxHeight: '180px', overflowY: 'auto', scrollbarWidth: 'none' }}>
							<div className='d-flex' style={{ gap: '12px' }}>
								<div style={{ width: 40, height: 40 }}>
									<CircularProgressbar
										value={availableLeaveData?.totalCasualLeaves - availableLeaveData?.remainingCasualLeaves || 0}
										styles={{
											path: { stroke: '#ff6e6e' },
											text: {
												fontSize: '34px',
												transform: 'translateY(4px)'
											}
										}}
										text={`${availableLeaveData?.totalCasualLeaves - availableLeaveData?.remainingCasualLeaves || 0}`}
										maxValue={availableLeaveData?.totalCasualLeaves}
									/>
								</div>
								<div>
									<span className='' style={{ fontSize: '14px' }}>
										Casual Leave
										<p className=' text-secondary' style={{ fontSize: '12px' }}>
											Available {availableLeaveData?.remainingCasualLeaves || 0} days
										</p>
									</span>
								</div>
							</div>

							<div className='col-md-12 '>
								<div className='d-flex' style={{ gap: '12px' }}>
									<div style={{ width: 40, height: 40 }}>
										<CircularProgressbar
											value={availableLeaveData?.totalLeaveWithoutPays - availableLeaveData?.remainingLeaveWithoutPays || 0}
											styles={{
												path: { stroke: '#1FC3B7' },
												text: {
													fontSize: '34px',
													transform: 'translateY(4px)'
												}
											}}
											text={`${availableLeaveData?.totalLeaveWithoutPays - availableLeaveData?.remainingLeaveWithoutPays || 0}`}
											maxValue={availableLeaveData?.totalLeaveWithoutPays}
										/>
									</div>
									<div>
										<span className='' style={{ fontSize: '14px' }}>
											Leave Without pay
											<p className=' text-secondary' style={{ fontSize: '12px' }}>
												Available {availableLeaveData?.remainingLeaveWithoutPays || 0} days
											</p>
										</span>
									</div>
								</div>
							</div>

							<div className='col-md-12 '>
								<div className='d-flex' style={{ gap: '12px' }}>
									<div style={{ width: 40, height: 40 }}>
										<CircularProgressbar
											value={availableLeaveData?.totalRestrictedHolidays - availableLeaveData?.remainingRestrictedHolidays || 0}
											styles={{
												path: { stroke: '#8584e8' },
												text: {
													fontSize: '34px',
													transform: 'translateY(4px)'
												}
											}}
											text={`${availableLeaveData?.totalRestrictedHolidays - availableLeaveData?.remainingRestrictedHolidays || 0}`}
											maxValue={availableLeaveData?.totalRestrictedHolidays}
										/>
									</div>

									<div>
										<span className='' style={{ fontSize: '14px' }}>
											Restricted Holidays
											<p className='text-secondary' style={{ fontSize: '12px' }}>
												Available {availableLeaveData?.remainingRestrictedHolidays || 0} days
											</p>
										</span>
									</div>
								</div>
							</div>
							<div className='col-md-12 '>
								<div className='d-flex' style={{ gap: '12px' }}>
									<div style={{ width: 40, height: 40 }}>
										<CircularProgressbar
											value={availableLeaveData?.totalWorkFromHomes - availableLeaveData?.remainingWorkFromHomes || 0}
											styles={{
												path: { stroke: '#1FC3B7' },
												text: {
													fontSize: '34px',
													transform: 'translateY(4px)'
												}
											}}
											text={`${availableLeaveData?.totalWorkFromHomes - availableLeaveData?.remainingWorkFromHomes || 0}`}
											maxValue={availableLeaveData?.totalWorkFromHomes}
										/>
									</div>
									<div>
										<span className='' style={{ fontSize: '14px' }}>
											workFromHome
											<p className=' text-secondary' style={{ fontSize: '12px' }}>
												Available {availableLeaveData?.remainingWorkFromHomes || 0} days
											</p>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-12 '>
							<div className='d-flex' style={{ gap: '12px' }}>
								<button
									className='btn btn-primary mb-2 mt-2'
									style={{
										padding: '0.2rem 2.1rem'
									}}
								>
									<Link to='leave' style={{ textDecoration: 'none', color: '#fff' }}>
										Apply Leave
									</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Leaves;
