import React, { useState, useEffect } from 'react';
import './AdminProjectTable.css';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import NoRecord from './NoRecord';
import { getProjects } from '../../Service/adminServices/projectService';
import { BiPlus } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom/dist';
import AddProject from './AddProject';
import EditProject from './EditProject';
import DeleteProject from './DeleteProject';

function AdminProjectTable() {
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

	const ShowTeamMembers = (teamMembers) => {
		const team_members = teamMembers.map((item, idx) => {
			return (
				<p className={`image-container img-${idx + 1} margin-remove`} key={idx}>
					<img src={item.profileImage} alt='team-member' />
				</p>
			);
		});

		if (team_members.length > 2) {
			team_members.splice(2);
			team_members.push(
				<p className='image-container img-3 '>
					<span className='count-member'>2+</span>
				</p>
			);

			return team_members;
		} else {
			return team_members;
		}
	};

	console.log(isRender);
	return (
		<>
			{isAddOpen && <AddProject setAddOpen={setAddOpen} setRender={setRender} />}
			{isEditOpen && <EditProject setEditOpen={setEditOpen} currentProject={currentProject} setRender={setRender} />}
			{isDelete && <DeleteProject setDeleteOpen={setDeleteOpen} currentProjectId={currentProject} setRender={setRender} />}

			<section className='project-container'>
				<div className='project-heading'>
					<div>
						<h1 style={{ fontSize: '1.5rem' }}>My Projects</h1>
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
								fontSize: '1rem'
							}}
							onClick={() => {
								setAddOpen(!isAddOpen);
								document.getElementById('scroll-hidden').style.overflow = 'hidden';
							}}
						>
							AddProject
							<BiPlus />
						</button>
					</div>
				</div>
				<div className='project-content'>
					<table>
						<thead>
							<tr id='table-heading'>
								<th>Project Name</th>
								<th>Assigned on</th>
								<th>To be submitted on</th>
								<th>Status</th>
								<th>Team</th>
								<th>Team Head</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{projects ? (
								projects.map((ele, index) => (
									<tr key={index}>
										<td
											style={{ cursor: 'pointer' }}
											onClick={() => {
												navigate({
													pathname: 'project-detail',
													search: `?projectId=${ele.id}`
												});
											}}
										>
											{ele.projectName}
										</td>
										<td>
											<span className='project-date'>
												<IoCalendarNumberOutline className='calender' />
												{ele.assignedOn}
											</span>
										</td>
										<td>
											<span className='project-date'>
												<IoCalendarNumberOutline className='calender' />
												{ele.completeBy}
											</span>
										</td>
										<td>
											<span className='dot'></span>
											<span className='status'>{ele.status}</span>
										</td>
										<td className='team-members' id='team'>
											{ShowTeamMembers(ele.teamMembers)}
										</td>
										<td>
											<div className='lead'>
												<p className='image-container ' id='team-lead'>
													<img src={ele.teamHead?.profileImage} alt='team-member' />
												</p>
												<span className='lead-name' style={{ fontSize: '0.8rem' }}>
													{ele.teamHead?.name}
												</span>
											</div>
										</td>
										<td>
											<button
												onClick={() => {
													setcurrentProject({
														projectName: ele.projectName,
														completeBy: ele.completeBy,
														teamHead: ele.teamHead.email,
														teamMembers: ele.teamMembers,
														department: ele.department,
														status: ele.status
													});
													setEditOpen(!isEditOpen);
													document.getElementById('scroll-hidden').style.overflow = 'hidden';
												}}
												style={{
													border: 'none',
													outline: 'none',
													backgroundColor: 'transparent',
													marginLeft: '0.7rem'
												}}
											>
												<AiFillEdit />
											</button>

											<button
												style={{
													border: 'none',
													outline: 'none',
													backgroundColor: 'transparent',
													marginLeft: '0.7rem'
												}}
												onClick={() => {
													setDeleteOpen(!isDelete);
													setcurrentProject({
														id: ele.id
													});
													document.getElementById('scroll-hidden').style.overflow = 'hidden';
												}}
											>
												<AiFillDelete />
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
}

export default AdminProjectTable;
