import React, { useState, useEffect,useContext } from 'react';
import { YourRequestGetdata, ResendRequest, CancelRequest } from '../../Service/LeavesService';
import './WFH.css';
import RequestTabs from './RequestTabs';
import NoRecord from '../Project/norecord';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcCancel } from 'react-icons/fc';
import { RealDataContext } from '../../Context/LoginContext';

function GetRequest() {
	const [GetRequestData, SetGetRequestData] = useState(null);
	const [resendData, setResendData] = useState({
		userId: '',
		requestId: ''
	});
	const [canceldata, setCancelData] = useState({
		requestId: ''
	});
	const [send, setSend] = useState(false);
	const [cancel, setCancel] = useState(false);
	const [isCalled, setIsCalled] = useState(false);
	const {isRealTime} = useContext(RealDataContext);
	

	

	useEffect(() => {
		YourRequestGetdata()
			.then((yourgetrequest) => {
				SetGetRequestData(yourgetrequest);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, [isCalled,isRealTime]);

	useEffect(() => {
		if (send) {
			ResendRequest(resendData)
				.then(async (response) => {
					const msg = await response.json().then((data) => {
						return data.message;
					});

					if (response.status === 201) {
						toast.success(`${msg}`, {
							position: 'top-left',
							autoClose: 2000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: 'colored'
						});
					} else {
						toast.error(`${msg}`, {
							position: 'top-right',
							autoClose: 2000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: 'colored'
						});
					}
				})
				.catch((e) => {
					console.log(e.message);
				});
		}
	}, [send]);

	const resendRequest = (id, userid) => {
		if (id) {
			setResendData({
				userId: userid,
				requestId: id
			});
		}
		setSend(true);
	};

	useEffect(() => {
		if (cancel) {
			
			CancelRequest(canceldata)
				.then(async (response) => {
					const message = await response.json().then((data) => {
						// console.log(data);
						
						return data.message;
					});
					if (response.status === 201) {
						
						toast.success(`${message}`, {
							position: 'top-left',
							autoClose: 2000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: 'colored'
						});

						setIsCalled((prev)=>!prev);
						
					} else {
						toast.error(`${message}`, {
							position: 'top-right',
							autoClose: 2000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: 'colored'
						});
					}
				})
				.catch((e) => {
					console.log(e.message);
				});
		}
	}, [cancel]);

	const cancelRequest = (id) => {
		
		if (id) {
			setCancelData({
				requestId: id
			});
			setCancel((prev)=>!prev);
		}
		
	};

	return (
		<div className='view-request-container-div'>
			<div className='tabs-div'>
				<RequestTabs />
			</div>
			<div className='request-content-div' style={{width:'80%'}}>
				<span className='request-content-title'>My Requests</span>
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
							<td>Action</td>
						</tr>
					</thead>
					<tbody>
						{GetRequestData ? (
							GetRequestData.map((item, index) => (
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
									<td >{item.request}</td>
									<td >{item.leaveType}</td>
									<td >{item.startDate}</td>
									<td >{item.endDate}</td>
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
									{item.status === 'Pending' ? (
										<td>
											<i
												className='bi bi-x-lg text-danger'
												onClick={() => {
													cancelRequest(item.id);
												}}
											></i>
										</td>
									) : item.status === 'Rejected' ? (
										<td>
											<i className='bi bi-send text-primary' onClick={() => resendRequest(item.id, item.userId)}></i>
										</td>
									) : item.status === 'Cancelled' ? (
										<td>
											<FcCancel />
										</td>
									) : (
										<td>
											<i className='bi bi-hand-thumbs-up text-success'></i>
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
}

export default GetRequest;
