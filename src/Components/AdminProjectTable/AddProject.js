import { useState, useEffect } from 'react';
import { addProject } from '../../Service/adminServices/projectService';
import { success } from '../../Utils/SuccessToast';
import './AddProject.css';

const AddProject = ({ setAddOpen, setRender }) => {
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
			addProject(formData)
				.then((data) => {
					// console.log(data);
					success(data.message);
					setAddOpen(false);
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
						<h2 className='form-project-title'>Add Project</h2>
					</div>
					<form className='admin-form' onSubmit={handleSubmit}>
						<div className='row-field' style={{ padding: '10px 0 0 10px' }}>
							<input type='text' name='projectName' id='projectName' className='field-size input-form' onChange={handleChange} required />
							<label htmlFor='projectName' className='text-start label-form'>
								ProjectName:
							</label>
						</div>
						<div className='row-field ' style={{ padding: '10px 0 0 10px' }}>
							<input type='text' name='clientName' id='clientName' onChange={handleChange} className='field-size input-form' required />
							<label htmlFor='clientName' className='text-start label-form'>
								ClientName:
							</label>
						</div>

						<div className='row-field date-row-field' style={{ padding: '10px 0 0 10px' }}>
							<div className='row-field' style={{ padding: '10px 0 0 10px' }}>
								<input
									type='text'
									name='assignedOn'
									id='assignedOn'
									onChange={handleChange}
									className='field-size input-form'
									onFocus={(event) => {
										event.target.type = 'date';
									}}
									onBlur={(event) => {
										event.target.type = 'type';
									}}
									required
								/>
								<label htmlFor='assignedOn' className='label-form'>
									AssignedOn:
								</label>
							</div>

							<div className='row-field' style={{ padding: '10px 0 0 10px' }}>
								<input
									type='text'
									name='completeBy'
									id='completeBy'
									onChange={handleChange}
									className='field-size input-form'
									onFocus={(event) => {
										event.target.type = 'date';
									}}
									onBlur={(event) => {
										event.target.type = 'type';
									}}
									required
								/>
								<label htmlFor='completeBy' className='label-form'>
									CompleteBy:
								</label>
							</div>
						</div>

						<div className='row-field' style={{ padding: '10px 0 0 10px' }}>
							<input type='text' name='teamHead' id='teamHead' onChange={handleChange} className='field-size input-form' required />
							<label htmlFor='teamHead' className='text-start label-form'>
								TeamHead:
							</label>
						</div>
						<div className='row-field ' style={{ padding: '10px 0 0 10px' }}>
							<input type='text' name='teamMembers' id='teamMembers' onChange={handleChange} className='field-size input-form' required />
							<label htmlFor='teamMembers' className='text-start label-form'>
								TeamMembers:
							</label>
						</div>
						<div className='row-field ' style={{ padding: '10px 0 0 10px' }}>
							<input type='text' name='department' id='Department' onChange={handleChange} className='field-size input-form' required />
							<label htmlFor='Department' className='text-start label-form'>
								Department:
							</label>
						</div>
						<div className='form-submit-button row-field flex-row justify-content-center'>
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
									setAddOpen(false);
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

export default AddProject;
