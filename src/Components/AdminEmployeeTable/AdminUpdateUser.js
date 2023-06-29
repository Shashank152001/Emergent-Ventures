import { useState, useEffect } from 'react';
import { UpdateUserDetails } from '../../Service/adminServices/userAddandUpdateService';
import { success } from '../../Utils/SuccessToast';


const AdminUpdateUser = ({ setEditOpen, currentUserId, setRender }) => {
	const [formData, setFormData] = useState({
		userId: '',
		role: '',
		department: '',
		location: ''
	});

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
		setFormData((prevData) => ({ ...prevData, ...currentUserId }));
	}, []);

	useEffect(() => {
		if (isFormFilled) {
			UpdateUserDetails(formData)
				.then((data) => {
					success(data.message);
					setEditOpen(false);
					document.body.style.overflow = 'visible';
					setRender((prev) => !prev);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [isFormFilled]);

	return (
		<section className='section-parent'>
			<div className='parent-container-form'>
				<div className='form-container'>
					<div>
						<h2 className='form-project-title'>Update User</h2>
					</div>
					<form className='admin-form' onSubmit={handleSubmit}>
						<div className='row-field ' style={{ padding: '10px 0 0 10px' }}>
							<input type='text' name='role' id='role' className='field-size input-form' value={formData?.role} onChange={handleChange} required />
							<label htmlFor='role' className='text-start label-form'>
								Role:
							</label>
						</div>

						<div className='row-field  ' style={{ padding: '10px 0 0 10px' }}>
							<input type='text' name='department' id='Department' value={formData?.department} className='field-size input-form' onChange={handleChange} required />
							<label htmlFor='Department' className='text-start label-form'>
								Department:
							</label>
						</div>

						<div className='row-field ' style={{ padding: '10px 0 0 10px' }}>
							<input type='text' name='location' id='location' value={formData?.location} className='field-size input-form' onChange={handleChange} required />
							<label htmlFor='location' className='text-start label-form'>
								Location:
							</label>
						</div>

						<div className='form-submit-button row-field flex-row justify-content-around'>
							<button
								type='submit'
								className='form-submit-btn'
								style={{
									width: '45%'
								}}
							>
								Submit
							</button>
							<button
								type='submit'
								className='form-submit-btn bg-danger'
								style={{
									width: '45%'
								}}
								onClick={() => {
									setEditOpen(false);
									document.body.style.overflow = 'visible';
								}}
							>
								close
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default AdminUpdateUser;
