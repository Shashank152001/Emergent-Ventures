import { useEffect, useState } from 'react';
import './AdminEmployeeTable.css';
import { getUsers } from '../../Service/adminServices/userService';
import { AiFillEdit } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import AdminAddUser from './AdminUserAdd';
import AdminUpdateUser from './AdminUpdateUser';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '@mui/material';

function AdminEmployeeTable() {
	const navigate = useNavigate();
	const [EmployeeData, setEmployeeData] = useState([]);
	const [curentPage, setCurrentPage] = useState(1);
	const [isOpen, setOpen] = useState(false);
	const [isEditOpen, setEditOpen] = useState(false);
	const [isRender, setRender] = useState(false);
	const recordPerPage = 7;
	const lastIndex = curentPage * recordPerPage;
	const firstIndex = lastIndex - recordPerPage;
	const records = EmployeeData.slice(firstIndex, lastIndex);
	const [currentUserId, setCurrentUserId] = useState({
		userId: '',
		role: '',
		department: '',
		location: ''
	});

	useEffect(() => {
		getUsers()
			.then((data) => {
				setEmployeeData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [isRender]);

	return (
		<>
			{isOpen && <AdminAddUser setOpen={setOpen} />}
			{isEditOpen && <AdminUpdateUser setEditOpen={setEditOpen} currentUserId={currentUserId} setRender={setRender} />}
			<div className='main-div'>
				<div className='tables'>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<h4 className='my-4'>Employees</h4>
						<button
							style={{
								border: 'none',
								outline: 'none',
								backgroundColor: '#2563EB',
								color: '#fff',
								padding: '7px 15px',
								borderRadius: '0.4rem'
							}}
							onClick={() => {
								document.getElementById('scroll-hidden').style.overflow = 'hidden';
								setOpen(!isOpen);
							}}
						>
							AddUser
							<BiPlus />
						</button>
					</div>

					<table className='tabledata table' id='table'>
						<thead className='theading  '>
							<tr>
								<th scope='col-sm-3'>Employee Name</th>
								<th scope='col-sm-3'>Employee Id</th>
								<th scope='col-sm-3'>Departmenrt</th>
								<th scope='col-sm-3'>Job Role</th>
								<th scope='col-sm-3'>Location</th>
								<th scope='col-sm-3'>Status</th>
								<th scope='col-sm-3'>Actions</th>
							</tr>
						</thead>
						<tbody className='table-group-divider'>
							{records.map((d, i) => (
								<tr key={i}>
									<td
										style={{ cursor: 'pointer' }}
										onClick={() => {
											navigate({
												pathname: 'user-profile',
												search: `?userId=${d.id}`
											});
										}}
									>
										{d.name}
									</td>
									<td>{d.hrmid}</td>
									<td>{d.department}</td>
									<td>{d.role}</td>
									<td>{d.location}</td>
									<td>{d.status === null ? 'not checked-in' : d.status}</td>
									<td>
										<button
											onClick={() => {
												setCurrentUserId({
													userId: d.id,
													role: d.role,
													department: d.department,
													location: d.location
												});
												document.getElementById('scroll-hidden').style.overflow = 'hidden';
												setEditOpen(!isEditOpen);
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
									</td>
								</tr>
							))}
						</tbody>
					</table>

					<div className='  d-flex justify-content-center align-items-center py-3'>
						<Pagination
							count={Math.ceil(EmployeeData.length / recordPerPage)}
							style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
							onChange={(event, value) => {
								setCurrentPage(value);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
export default AdminEmployeeTable;
