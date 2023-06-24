import React, { useState, useEffect } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { getProjects } from '../../Service/adminServices/projectService';
import { BiPlus } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom/dist';
import AddProject from './AddProject';
import EditProject from './EditProject';
import DeleteProject from './DeleteProject';
import myprofile from '../../Assest/myprofile.png';
import NoRecord from './norecord';
import './AdminProjectTable.css';

const AdminProjectTable = () => {
	const navigate = useNavigate();
	const [projects, setProject] = useState(null);
	const [isAddOpen, setAddOpen] = useState(false);
	const [isEditOpen, setEditOpen] = useState(false);
	const [isDelete, setDeleteOpen] = useState(false);
	const [isRender, setRender] = useState(false);
	const [currentProject, setcurrentProject] = useState({
		id: '',
		projectName: '',
		completeBy: '',
		teamHead: '',
		teamMembers: '',
		department: '',
		status: ''
	});

	useEffect(() => {
		getProjects()
			.then((data) => {
				setProject(data);
			})
			.catch((e) => {
				console.log(e.message);
				setProject(null);
			});
	}, [isRender]);

	return (
		<>
			{isAddOpen && <AddProject setAddOpen={setAddOpen} setRender={setRender} />}
			{isEditOpen && <EditProject setEditOpen={setEditOpen} currentProject={currentProject} setRender={setRender} />}
			{isDelete && <DeleteProject setDeleteOpen={setDeleteOpen} currentProjectId={currentProject} setRender={setRender} />}
			<section className='project-table-container'>
				<div className='project-table-head'>
					<div>
						<h1 className='project-table-title'>Projects</h1>
					</div>
					<div style={{ display: 'flex' }}>
						<button
							className=''
							style={{
								borderRadius: '0.4rem',
								backgroundColor: '#2563EB',
								border: 'none',
								outline: 'none',
								padding: '0.5rem',
								color: '#fff',
								fontSize: '1rem',
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex'
							}}
							onClick={() => {
								setAddOpen(!isAddOpen);
								document.getElementById('scroll-hidden').style.overflow = 'hidden';
							}}
						>
							Add Project
							<BiPlus style={{ fontSize: '1.4rem' }} />
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
								<th className='table-head' style={{ textAlign: 'center' }}>
									Actions
								</th>
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
										<td className='actions-table-data'>
											<button
												onClick={() => {
													setcurrentProject({
														projectName: project.projectName,
														completeBy: project.completeBy,
														teamHead: project.teamHead.email,
														teamMembers: project.teamMembers,
														department: project.department,
														status: project.status
													});
													setEditOpen(!isEditOpen);
													document.getElementById('scroll-hidden').style.overflow = 'hidden';
												}}
												style={{
													border: 'none',
													outline: 'none',
													backgroundColor: 'transparent'
												}}
											>
												<i class='bi bi-pencil'></i>
											</button>

											<button
												style={{
													border: 'none',
													outline: 'none',
													backgroundColor: 'transparent'
												}}
												onClick={() => {
													setDeleteOpen(!isDelete);
													setcurrentProject({
														id: project.id
													});
													document.getElementById('scroll-hidden').style.overflow = 'hidden';
												}}
											>
												<i class='bi bi-trash'></i>
											</button>
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
		</>
	);
};

export default AdminProjectTable;
