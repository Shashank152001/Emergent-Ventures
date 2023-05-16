import React, { useEffect, useState } from 'react';
import { bulkData } from '../../Service/FileUploadService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dashboard.css';

function FileUpload({ isOpen, onClose }) {
	const [file, setFile] = useState(null);
	const [isFilled, setFilled] = useState(false);

	useEffect(() => {
		if (isFilled) {
			const formData = new FormData();
			formData.append('csvFile', file);

			bulkData(formData)
				.then((data) => {
					toast.info('File Uploaded Successfully', {
						position: 'top-right',
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
					console.log(e.message);
				});
		}

		return () => {
			setFilled(false);
			setFile(null);
		};
	}, [isFilled]);

	const handleClose = () => {
		onClose();
	};

	const handleOnChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		setFilled(true);
	};

	return (
		<div>
			{isOpen && (
				<div className='upload-dialog-div'>
					<div className='upload-dialog'>
						<form className='upload-form' onSubmit={handleOnSubmit}>
							<span className='upload-span'>Upload a file</span>
							<input className='upload-input form-control' type='file' name='file' id='name' accept='.csv' required onChange={handleOnChange} />
							<div className='upload-buttons-div'>
								<button className='close-button btn btn-secondary' onClick={handleClose}>
									Close
								</button>
								<button className='submit-button primary btn btn-primary' type='submit'>
									Upload
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}

export default FileUpload;
