import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchReportingTimesheet, UpdateReportingTimesheet } from '../../Service/TimesheetService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { socket } from '../../socket';

function EditReportingTimeSheet() {
	const navigate = useNavigate();
	const [reportingTimeSheet, SetReportingTimesheet] = useState([]);
	const { id } = useParams();
	const [putTimesheet, setPutTimesheet] = useState(false);
	const [formData, setFormData] = useState({
		id:'',
		userId: '',
		status: ''
	});
	useEffect(() => {
		fetchReportingTimesheet()
			.then((data) => {
			
				SetReportingTimesheet(data[id]);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);
	useEffect(() => {
		if (putTimesheet) {
			UpdateReportingTimesheet(formData)
				.then((data) => {
					socket.emit('sendNotifications');
					
					toast.success('Status Updated Successfull', {
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
				.catch((e) => {
					console.log(e.meesage);
					toast.error('Could not Connect with Server', {
						position: 'top-right',
						autoClose: 2000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'colored'
					});
				});
		}
	}, [putTimesheet]);

	const handleSubmit = (event) => {
		event.preventDefault();
         
		setFormData({
			id: reportingTimeSheet.id,
			userId: reportingTimeSheet.userId,
			status: event.target['status'].value
		});
		setPutTimesheet(true);
	};
	return (
		<>
			<div className='container'>
				<span>Request Form</span>
				<div className='row'>
					<div className='col-md-12'>
						<form className='mt-4' onSubmit={handleSubmit}>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>HrmId</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' value={reportingTimeSheet.hrmid} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Name</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Name' value={reportingTimeSheet.name} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Timesheet Name</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Email' value={reportingTimeSheet.timesheetName} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Client Name</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Role' value={reportingTimeSheet.clientName} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Project Name</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='RequestType' value={reportingTimeSheet.projectName} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Job Name</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Leave' value={reportingTimeSheet.jobName} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Work Item</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='startDate' value={reportingTimeSheet.workItem} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Description</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='EndDate' value={reportingTimeSheet.description} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Date</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Reason' value={reportingTimeSheet.date} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Week</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Reason' value={reportingTimeSheet.week} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Total Time</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Reason' value={reportingTimeSheet.totalTime} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Billable Status</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Reason' value={reportingTimeSheet.billableStatus} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Submitted Hours</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Reason' value={reportingTimeSheet.submittedHours} disabled />
								</div>
							</div>
							<div className='form-group row'>
								<label className='col-sm-2 col-form-label'>Approved Hours</label>
								<div className='col-sm-10'>
									<input type='text' className='form-control' placeholder='Reason' value={reportingTimeSheet.approvedHours} disabled />
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

export default EditReportingTimeSheet;
