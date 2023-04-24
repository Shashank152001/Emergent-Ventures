import React, { useState, useEffect } from 'react';
import { leaveRequest, leaveUser } from '../../Service/LeavesService';
import './WFH.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const WFHform = () => {
	const [formData, setFormData] = useState({
		email: '',
		startDate: '',
		endDate: '',
		request: '',
		leaveType: '',
		reason: ''
	});
	const [formErrors, setFormErrors] = useState({});
	const [isFilled, setFilled] = useState(false);
	const [userDatas, setUserDatas] = useState(null);
	const FormData = new URLSearchParams(formData);

	useEffect(() => {
		leaveUser()
			.then((data) => {
				setUserDatas(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);
  useEffect(()=>{
    if(isFilled){
      leaveRequest(formData).then((data)=>{
        toast.success('Request Submitted Successfull', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }).catch((e)=>{
        toast.error('COnnection to Server Lost', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      })
    }
  },[isFilled])

	const handleSubmit = (event) => {
		event.preventDefault();
		const errors = {};
		if (!formData.email) {
			errors.email = 'Please enter your email';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Please enter a valid email address';
		}

		if (!formData.reason) {
			errors.reason = 'Please enter a reason';
		}
		if (!formData.startDate) {
			errors.startDate = 'Please enter a start date';
		}
		if (!formData.startDate) {
			errors.endDate = 'Please enter a end date';
		}
		if (!formData.request) {
			errors.request = 'Please enter a request';
		}
		if (Object.keys(errors).length === 0) {
			setFilled(()=>{
        return true
      });
		} else {
			setFormErrors(errors);
		}
		// const bodydata = FormData;
    console.log(isFilled);
		console.log(formData);
		
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<div
			style={{
				background: '#ffffff',
				position: 'absolute',
				padding: '2rem',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<h4
				style={{
					fontWeight: '800',
					alignSelf: 'flex-start'
				}}
			>
				Request Forms
			</h4>

			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column'
				}}
			>
				{userDatas ? (
					<div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem' }}>
						<div style={{}}>
							<label style={{ fontWeight: '500', width: '10rem' }}>Employee ID</label>
						</div>
						<div>
							<input
								style={{
									width: '30rem',
									marginLeft: '6rem',
									backgroundColor: '#fffff',
									padding: '0.6rem',
									outline: 'none',
									border: '1px solid lightgray',
									borderRadius: '3px'
								}}
								type='text'
								name='userId'
								value={userDatas.hrmid}
								onChange={handleChange}
							></input>
						</div>
					</div>
				) : (
					<div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem' }}>
							<label style={{ fontWeight: '500', width: '10rem' }}>Employee ID</label>
						
						<div>
							<input
								style={{
									width: '30rem',
									marginLeft: '6rem',
									backgroundColor: '#fffff',
									padding: '0.6rem',
									outline: 'none',
									border: '1px solid lightgray',
									borderRadius: '3px'
								}}
								type='text'
								name='userId'
								value='HRMID'
								onChange={handleChange}
							></input>
						</div>
					</div>
				)}
				<div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem' }}>
					<div style={{}}>
						<label style={{ fontWeight: '500', width: '10rem' }}>Email</label>
					</div>
					<div>
						<input
							style={{
								width: '30rem',
								marginLeft: '6rem',
								backgroundColor: '#fffff',
								padding: '0.6rem',
								outline: 'none',
								border: '1px solid lightgray',
								borderRadius: '3px'
							}}
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
						></input>
            {formErrors.email && <p className='text-danger' style={{
								marginLeft: '6rem'
							}}>{formErrors.email}</p>}
					</div>
				</div>

				<div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem' }}>
					<div>
						<label style={{ fontWeight: '500', width: '10rem' }}>Request</label>
					</div>
					<div>
						<select
							style={{
								width: '30rem',
								marginLeft: '6rem',
								backgroundColor: '#fffff',
								padding: '0.6rem',
								outline: 'none',
								border: '1px solid lightgray',
								borderRadius: '3px'
							}}
							name='request'
							value={formData.request}
							onChange={handleChange}
						>
							<option>Select Request</option>
							<option value='Casual Intern Leave'>Casual Intern Leave</option>
							<option value='Work From Home'>Work From Home</option>
							<option value='Restricted Leaves'>Restricted Leave</option>
							<option value='Leave Without Pay'>Leave Without Pay</option>
						</select>
            {formErrors.request && <p className='text-danger' style={{
								marginLeft: '6rem'
							}}>{formErrors.request}</p>}
					</div>
				</div>

				<div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem' }}>
					<div>
						<label style={{ fontWeight: '500', width: '10rem' }}>Date</label>
					</div>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<div>
							<label
								style={{
									fontWeight: '500',
									width: '6rem',
									textAlign: 'center',
									marginLeft: '6rem'
								}}
							>
								From
							</label>
							<input
								style={{
									width: '10rem',
									backgroundColor: '#fffff',
									padding: '0.6rem',
									outline: 'none',
									border: '1px solid lightgray',
									borderRadius: '3px'
								}}
								type='date'
								name='startDate'
								value={formData.startDate}
								onChange={handleChange}
							></input>
              {formErrors.startDate && <p className='text-danger' style={{
								marginLeft: '7rem'
							}}>{formErrors.startDate}</p>}
						</div>
						<div>
							<label
								style={{ fontWeight: '500', width: '4rem', textAlign: 'center' }}
							>
								To
							</label>
							<input
								style={{
									width: '10rem',
									backgroundColor: '#fffff',
									padding: '0.6rem',
									outline: 'none',
									border: '1px solid lightgray',
									borderRadius: '3px'
								}}
								type='date'
								name='endDate'
								value={formData.endDate}
								onChange={handleChange}
							></input>
              {formErrors.endDate && <p className='text-danger' style={{
                marginLeft:"1rem"
							}}>{formErrors.endDate}</p>}
						</div>
					</div>
				</div>

				<div style={{ display: 'flex', alignItems: 'center', margin: '0.5rem' }}>
					<div>
						<label className='' style={{ fontWeight: '500', width: '10rem' }}>
							Leave Type
						</label>
					</div>
					<div>
						<select
							style={{
								width: '30rem',
								marginLeft: '6rem',
								backgroundColor: '#fffff',
								padding: '0.6rem',
								outline: 'none',
								border: '1px solid lightgray',
								borderRadius: '3px'
							}}
							name='leaveType'
							value={formData.leaveType}
							onChange={handleChange}
						>
							<option>Select Leave Type</option>
							<option value='Half Day'>Half Day</option>
							<option value='Full Day'>Full Day</option>
						</select>
					</div>
				</div>

				<div style={{ display: 'flex', alignItems: 'self-start', margin: '0.5rem' }}>
					<div>
						<label style={{ fontWeight: '500', width: '10rem' }}>Reason</label>
					</div>
					<div>
						<textarea
							style={{
								width: '30rem',
								marginLeft: '6rem',
								backgroundColor: '#fffff',
								padding: '0.6rem',
								outline: 'none',
								border: '1px solid lightgray',
								borderRadius: '3px'
							}}
							rows={4}
							type='text'
							name='reason'
							value={formData.reason}
							onChange={handleChange}
						></textarea>
            {formErrors.reason && <p className='text-danger' style={{
								marginLeft: '6rem'
							}}>{formErrors.reason}</p>}
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						margin: '0.5rem',
						padding: '0.5rem'
					}}
				>
					<button
						type='submit'
						style={{
							padding: '0.4rem 0.8rem',
							margin: '0.4rem',
							background: '#3bbd9b',
							color: '#ffffff',
							border: 'none',
							borderRadius: '3px'
						}}
					>
						Submit
					</button>
					<button
						style={{
							padding: '0.4rem 0.8rem',
							margin: '0.4rem',
							background: '#ffffff',
							color: '#000000',
							border: '1px solid #aaaaaa',
							borderRadius: '3px'
						}}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default WFHform;
