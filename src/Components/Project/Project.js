import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import 'primeicons/primeicons.css';
import './project.css';

const Project = () => {
	const [projectData, setProjectData] = useState({});
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			// getProjectDetail(id)
			// .then((data) => {
			// 	setProjectData(data);
			// })
			// .catch((e) => {
			// 	console.log(e.message);
			// 	setProjectData({});
			// });
		}

		return () => {
			setProjectData({});
		};
	}, [id]);

	return (
		<>
			<div className='project-container'>
				<div className='project-title-div'>Project</div>
				<div className='project-details-div'>
					<div className='first-column'>
						<div className='project-details-div project-details-div-common'>
							<div className='inner-details-title-div'>
								<div className='notch'></div>
								<span className='inner-details-title'>Project Details</span>
							</div>
							<div className='project-details-content-div'>
								<div className='inner-details-div'>
									<div className='project-detail-field-div'>
										<span style={{ padding: '1rem', fontSize: '1.4rem' }}>
											<i className='bi bi-diagram-3'></i>
										</span>
										<span style={{ padding: '1rem' }}>{projectData?.projectName || ''}</span>
									</div>
									<div className='project-detail-field-div'>
										<span style={{ padding: '1rem', fontSize: '1.4rem' }}>
											<i className='bi bi-people'></i>
										</span>
										<span style={{ padding: '1rem' }}>{projectData?.clientName || ''}</span>
									</div>
								</div>
								<div className='inner-details-div'>
									<div className='project-detail-field-div'>
										<span style={{ padding: '1rem', fontSize: '1.4rem' }}>
											<i className='bi bi-phone'></i>
										</span>
										<span style={{ padding: '1rem' }}>{projectData?.assignedOn || ''}</span>
									</div>
									<div className='project-detail-field-div'>
										<span style={{ padding: '1rem', fontSize: '1.4rem' }}>
											<i className='bi bi-geo-alt'></i>
										</span>
										<span style={{ padding: '1rem' }}>{projectData?.completeBy || ''}</span>
									</div>
								</div>
								<div className='inner-details-div'>
									<div className='project-detail-field-div'>
										<span style={{ padding: '1rem', fontSize: '1.4rem' }}>
											<i className='bi bi-phone'></i>
										</span>
										<span style={{ padding: '1rem' }}>{projectData?.department || ''}</span>
									</div>
									<div className='project-detail-field-div'>
										<span style={{ padding: '1rem', fontSize: '1.4rem' }}>
											<i className='bi bi-geo-alt'></i>
										</span>
										<span style={{ padding: '1rem' }}>{projectData?.status || ''}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='second-column'>
						{projectData?.teamHead ? (
							<div className='team-head-div  project-details-div-common'>
								<div className='inner-details-title-div'>
									<div className='notch'></div>
									<span className='inner-details-title'>Team Head</span>
								</div>
								<div className='project-details-content-div'>
									<div className='project-details-card-div'>
										<div className='project-details-card-image-div'>
											<img className='project-image-mini' name='image' src={projectData?.teamHead?.profileImage} alt='' />
										</div>

										<div className='project-details-card-content-div'>
											<div>
												<span style={{ fontSize: '0.9rem' }}>
													{projectData?.teamHead?.hrmid || ''}
													<span> - </span>
												</span>
												<span
													style={{
														fontWeight: 'bold',
														fontSize: '0.9rem'
													}}
												>
													{projectData?.teamHead?.name || ''}
												</span>
											</div>
											<div>
												<span>
													{projectData?.teamHead?.role || ''}
													<span> - </span>
												</span>
												<span>{projectData?.teamHead?.department || ''}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							<></>
						)}

						{projectData?.teamMembers ? (
							<div className='team-members-div project-details-div-common'>
								<div className='inner-details-title-div'>
									<div className='notch'></div>
									<span className='inner-details-title'>Team Members</span>
								</div>
								<div className='project-details-content-div'>
									{projectData?.teamMembers.map((teamMember) => {
										return (
											<div className='project-details-card-div' key={teamMember.hrmid}>
												<div className='project-details-card-image-div'>
													<img className='project-image-mini' name='image' src={teamMember?.profileImage} alt='' />
												</div>
												<div className='project-details-card-content-div'>
													<div>
														<span style={{ fontSize: '0.9rem' }}>
															{teamMember?.hrmid || ''}
															<span> - </span>
														</span>
														<span
															style={{
																fontWeight: 'bold',
																fontSize: '0.9rem'
															}}
														>
															{teamMember?.name || ''}
														</span>
													</div>
													<div>
														<span>
															{teamMember?.role || ''}
															<span> - </span>
														</span>
														<span>{teamMember?.department || ''}</span>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Project;