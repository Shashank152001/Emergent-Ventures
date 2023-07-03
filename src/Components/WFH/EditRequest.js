import React, { useState, useEffect } from 'react';
import { socket } from '../../socket';
import { useParams, useNavigate } from 'react-router-dom';
import { EditUpdate, ReportingGetdata } from '../../Service/LeavesService';
import { success } from '../../Utils/SuccessToast';
import 'react-toastify/dist/ReactToastify.css';
import { serverError } from '../../Utils/ServerToast';

function EditRequest() {
	
	const navigate = useNavigate();
	const [ReportingData, SetReportingData] = useState([]);
	const { id } = useParams();
	const [formData, setFormData] = useState({
		userId: '',
		requestId: '',
		status: ''
	});
	const [putData, setPutData] = useState(false);

	useEffect(() => {
		ReportingGetdata()
			.then((ReportingRequestdata) => {
				SetReportingData(ReportingRequestdata[id]);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	useEffect(() => {
		if (putData) {
			EditUpdate(formData)
				.then((data) => {
					socket.emit('sendNotifications');
					navigate('/dashboard/viewRequest');
					success('Status Updated Successfull');
				})
				.catch((e) => {
					serverError();
				});
		}
	}, [putData]);


	const handleSubmit = (event) => {
		event.preventDefault();

		setFormData({
			userId: ReportingData.userId,
			requestId: ReportingData.id,
			status: event.target['status'].value
		});

		setPutData(true);
	};


	return (
		<>
			<div className='container'>
				<span>Request Form</span>
				<div className='row'>
					<div className='col-md-12'>
						<form onSubmit={handleSubmit} className='mt-4'>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>HrmId</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' value={ReportingData.hrmid} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Name</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Name' value={ReportingData.name} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Email</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Email' value={ReportingData.email} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Role</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Role' value={ReportingData.role} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>RequestType</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='RequestType' value={ReportingData.request} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Leave</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Leave' value={ReportingData.leaveType} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>startDate</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='startDate' value={ReportingData.startDate} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>EndDate</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='EndDate' value={ReportingData.endDate} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Reason</label>
								<div className='col-sm-10'>
									<textarea type='text' className='form-control' placeholder='Reason' value={ReportingData.reason} disabled />
								</div>
							</div>

							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Status</label>
								<div className='col-sm-10'>
									<select
										className='form-select reportrequest'
										name='status'
										// value={ReportingData.status}
									>
										<option value='Pending'>Pending</option>
										<option value='Approve'>Approve</option>
										<option value='Reject'>Reject</option>
									</select>
								</div>
							</div>
							<div className='form-group row'>
								<button type='submit' className='btn btn-success mt-5'>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
export default EditRequest;
