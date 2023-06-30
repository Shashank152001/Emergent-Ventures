import { useState, useEffect } from 'react';
import { addNewUser } from '../../Service/adminServices/userAddandUpdateService';
import { success } from '../../Utils/SuccessToast';


const AdminAddUser = ({ setOpen }) => {
	const [formData, setFormData] = useState(null);
	const [isFormFilled, setFormFilled] = useState(false);

	const handleChange = (event) => {
		const { value, name } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormFilled((prev) => !prev);
	};

	useEffect(() => {
		if (isFormFilled) {
			addNewUser(formData)
				.then((data) => {
					success(data.msg);
					setOpen(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [isFormFilled]);

	return (
		// <section className="section-parent">
		<div className='parent-container-form'>
			<div className='form-container-project'>
				<div>
					<h2 className='form-project-title'>Add User</h2>
				</div>
				<form className='row admin-form' onSubmit={handleSubmit}>
					<div className='row-field col-6 user-row-field ' style={{ paddingTop: '10px' }}>
						<input type='text' name='hrmid' id='hrmid' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='hrmid' className='text-start label-form'>
							HrmId:
						</label>
					</div>

					<div className='row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input type='text' name='name' id='name' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='name' className='text-start label-form'>
							Name:
						</label>
					</div>

					<div className='row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input type='email' name='email' id='name' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='email' className='text-start label-form'>
							Email:
						</label>
					</div>

					<div className='row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input type='text' name='phone' id='phone' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='phone' className='text-start label-form'>
							Phone:
						</label>
					</div>

					<div className='row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input type='text' name='role' id='role' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='role' className='text-start label-form'>
							Role:
						</label>
					</div>

					<div className='row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input type='text' name='department' id='Department' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='Department' className='text-start label-form'>
							Department:
						</label>
					</div>

					<div className='row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input type='text' name='location' id='location' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='location' className='text-start label-form'>
							Location:
						</label>
					</div>

					<div className='row-field date-row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input
							type='text'
							name='joiningDate'
							id='joiningDate'
							className='field-size input-form'
							onChange={handleChange}
							onFocus={(event) => {
								event.target.type = 'date';
							}}
							onBlur={(event) => {
								event.target.type = 'type';
							}}
							required
						/>
						<label htmlFor='joiningDate' className='label-form'>
							JoiningDate:
						</label>
					</div>

					<div className='row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input type='text' name='reportingManager' id='reportingManager' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='reportingManager' className='text-start label-form'>
							ReportingManager:
						</label>
					</div>

					<div className='row-field col-6 user-row-field' style={{ paddingTop: '10px' }}>
						<input type='text' name='reportsTo' id='reportsTo' className='field-size input-form' onChange={handleChange} required />
						<label htmlFor='reportsTo' className='text-start label-form'>
							ReportsTo:
						</label>
					</div>

					<div className='form-submit-button row-field flex-row'>
						<button type='submit' className='form-submit-btn'>
							Submit
						</button>
						<button
							type='submit'
							className='form-submit-btn bg-danger'
							onClick={() => {
								setOpen(false);
								document.body.style.overflow = 'visible';
							}}
						>
							close
						</button>
					</div>
				</form>
			</div>
		</div>
		// </section>
	);
};

export default AdminAddUser;
