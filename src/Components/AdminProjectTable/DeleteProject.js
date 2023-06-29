import { useState, useEffect } from 'react';
import { DeleteProjectData } from '../../Service/adminServices/projectService';
import { success } from '../../Utils/SuccessToast';
// import './AddProject.css';

const DeleteProject = ({ setDeleteOpen, currentProjectId, setRender }) => {
	const [formData, setFormData] = useState({ projectId: '' });
	const [isFormFilled, setFormFilled] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setFormFilled((prev) => !prev);
	};

	useEffect(() => {
		setFormData({
			projectId: currentProjectId.id
		});
	}, []);

	useEffect(() => {
		if (isFormFilled) {
			DeleteProjectData(formData)
				.then((data) => {
					success(data.message);
					setDeleteOpen(false);
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
						<h2 className='form-project-title'>Delete Project</h2>
					</div>
					<form className='admin-form' onSubmit={handleSubmit}>
						<div className='form-submit-button row-field flex-row justify-content-center'>
							<button
								type='submit'
								className='form-submit-btn bg-danger'
								style={{
									width: '45%'
								}}
							>
								Delete
							</button>
							<button
								className='form-submit-btn bg-secondary'
								onClick={() => {
									setDeleteOpen(false);
									document.body.style.overflow = 'visible';
								}}
								style={{
									width: '45%'
								}}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default DeleteProject;
