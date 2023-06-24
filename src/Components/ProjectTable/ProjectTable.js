import React, { useState, useEffect } from 'react';
import myprofile from '../../Assest/myprofile.png';
import { AiOutlineDown, AiOutlineSwap } from 'react-icons/ai';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { fetchProjects } from '../../Service/ProjectService';
import { useNavigate } from 'react-router-dom/dist';
import NoRecord from './norecord';
import './ProjectTable.css';

const ProjectTable = () => {
	const navigate = useNavigate();
	const [projects, setProject] = useState(null);

	useEffect(() => {
		fetchProjects()
			.then((data) => {
				setProject(data);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	return (
		<section className='project-table-container'>
			<div className='project-table-head'>
				<div>
					<h1 className='project-table-title'>My Projects</h1>
				</div>
				<div style={{ display: 'flex' }}>
					<AiOutlineSwap className='rotate-90' />
					<button className='sort-button' style={{ border: 'none' }}>
						Sort
						<AiOutlineDown className='arrow-down' />
					</button>
				</div>
			</div>
			<div className='project-table-content'>
				<table className='project-table-content-table'>
					<thead className='project-table-content-head'>
						<tr className='table-head-row'>
							<th className='table-head'>Project Name</th>
							<th className='table-head'>Assigned on</th>
							<th className='table-head'>Complete By</th>
							<th className='table-head'>Status</th>
							<th className='table-head'>Team</th>
							<th className='table-head'>Team Head</th>
						</tr>
					</thead>
					<tbody>
						{projects ? (
							projects.map((project, index) => (
								<tr key={index}>
									<td
										className='table-data'
										style={{ cursor: 'pointer' }}
										onClick={() => {
											navigate({
												pathname: 'project-detail',
												search: `?projectId=${project.id}`
											});
										}}
									>
										{project.projectName}
									</td>
									<td className='table-data'>
										<span className='date'>
											<IoCalendarNumberOutline className='calendar-logo' />
											{project?.assignedOn}
										</span>
									</td>
									<td className='table-data'>
										<span className='date'>
											<IoCalendarNumberOutline className='calendar-logo' />
											{project?.completeBy}
										</span>
									</td>
									<td className='table-data color-blue status'>
										<div className='status-progress-dot'></div>
										<span>{project.status}</span>
									</td>
									<td className='table-data'>
										{project?.teamMembers.length === 1 ? (
											<div className='image-overlap'>
												<span>
													<img className='img-1' src={project?.teamMembers[0]?.profileImage ? project?.teamMembers[0]?.profileImage : myprofile} alt='team-member' />
												</span>
											</div>
										) : (
											<>
												{project?.teamMembers.length === 2 ? (
													<div className='image-overlap'>
														<span>
															<img className='img-1' src={project?.teamMembers[0]?.profileImage ? project?.teamMembers[0]?.profileImage : myprofile} alt='team-member' />
														</span>
														<span>
															<img className='img-2' src={project?.teamMembers[1]?.profileImage ? project?.teamMembers[1]?.profileImage : myprofile} alt='team-member' />
														</span>
													</div>
												) : (
													<>
														{project?.teamMembers.length > 2 ? (
															<div className='image-overlap'>
																<span>
																	<img
																		className='img-1'
																		src={project?.teamMembers[0]?.profileImage ? project?.teamMembers[0]?.profileImage : myprofile}
																		alt='team-member'
																	/>
																</span>
																<span>
																	<img
																		className='img-2'
																		src={project?.teamMembers[1]?.profileImage ? project?.teamMembers[1]?.profileImage : myprofile}
																		alt='team-member'
																	/>
																</span>
																<span>
																	<div className='img-3'>
																		<span className='img-3-number'>+{project?.teamMembers.length - 2}</span>
																	</div>
																</span>
															</div>
														) : (
															<></>
														)}
													</>
												)}
											</>
										)}
									</td>
									<td className='table-data'>
										<div>
											<span>
												<img className='team-head-img' src={project?.teamHead?.profileImage ? project?.teamHead?.profileImage : myprofile} alt='team-head' />
											</span>
											<span className='team-head-name'>{project?.teamHead?.name}</span>
										</div>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan='6'>
									<NoRecord />
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</section>
	);
};

export default ProjectTable;
