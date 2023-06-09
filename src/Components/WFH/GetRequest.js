import React, { useState, useEffect, useContext } from 'react';
import { YourRequestGetdata, ResendRequest, CancelRequest } from '../../Service/LeavesService';
import './WFH.css';
import RequestTabs from './RequestTabs';
import NoRecord from '../ProjectTable/norecord';
import { success } from '../../Utils/SuccessToast';
import { Error } from '../../Utils/ErrorToast';
import 'react-toastify/dist/ReactToastify.css';
import { FcCancel } from 'react-icons/fc';
import { RealDataContext } from '../../Context/LoginContext';
import { Pagination } from '@mui/material';

function GetRequest() {
	const [GetRequestData, SetGetRequestData] = useState(null);
	const [curentPage, setCurrentPage] = useState(1);
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
	const { isRealTime } = useContext(RealDataContext);
	const recordPerPage = 8;
	const lastIndex = curentPage * recordPerPage;
	const firstIndex = lastIndex - recordPerPage;
	const records = GetRequestData && GetRequestData.slice(firstIndex, lastIndex);

	useEffect(() => {
		YourRequestGetdata()
			.then((yourgetrequest) => {
				
				SetGetRequestData(yourgetrequest);
				setSend(false)
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, [isCalled, isRealTime]);

	useEffect(() => {
		if (send) {
			ResendRequest(resendData)
				.then(async (response) => {
					const msg = await response.json().then((data) => {
						return data.message;
					});
					if (response.status === 201) {
						success(msg);
						setIsCalled((prev) => !prev);
					} else {
						Error(msg);
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
						return data.message;
					});
					if (response.status === 201) {
						success(message);
						setIsCalled((prev) => !prev);
					} else {
						Error(message);
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
			setCancel((prev) => !prev);
		}
	};

	return (
		<div className='view-request-container-div'>
			<div className='tabs-div'>
				<RequestTabs />
			</div>
			<div className='request-content-div' style={{ width: '80%' }}>
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
						{records ? (
							records.map((item, index) => (
								<tr key={index}>
									<td>{index + 1}</td>
									<td>
										<span>
											<img style={{ width: '2rem', height: '2rem', borderRadius:'50%' }} src={item.profileImage} alt='employee' />
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
									{item.status === 'Pending' ? (
										<td style={{cursor:'pointer'}}>
											<i
												className='bi bi-x-lg text-danger'
												onClick={() => {
													cancelRequest(item.id);
												}}
											></i>
										</td>
									) : item.status === 'Rejected' ? (
										<td style={{cursor:'pointer'}}>
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

               {
				records && 
				<div className='  d-flex justify-content-center align-items-center py-3'>
						<Pagination
							count={Math.ceil(GetRequestData.length / recordPerPage)}
							style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							onChange={(event, value) => {
								setCurrentPage(value);
				 }}
				/>
			</div>

			}

			</div>
			
		</div>
	);
}

export default GetRequest;
