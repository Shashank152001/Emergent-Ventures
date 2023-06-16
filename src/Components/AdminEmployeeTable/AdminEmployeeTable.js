import { useEffect, useState } from 'react';
import './AdminEmployeeTable.css';
import { getUsers } from '../../Service/adminServices/userService';
import {AiFillEdit } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import AdminAddUser from '../ProjectTable/adminUserAdd';
import AdminUpdateUser from '../ProjectTable/adminUpdateUser';
 

function AdminEmployeeTable() {
	const [EmployeeData, setEmployeeData] = useState([]);
	const [curentPage, setCurrentPage] = useState(1);
	const [isOpen,setOpen] = useState(false);
	const [isEditOpen,setEditOpen] =useState(false);
	const[isRender,setRender] = useState(false);
	const recordPerPage = 15;
	const lastIndex = curentPage * recordPerPage;
	const firstIndex = lastIndex - recordPerPage;
	const records = EmployeeData.slice(firstIndex, lastIndex);
	const nPage = Math.ceil(EmployeeData.length / recordPerPage);
	const numbers = [...Array(nPage + 1).keys()].slice(1);
	const[currentUserId,setCurrentUserId]=useState({
		userId:'',
		role:"",
		department:"",
		location:''
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
		{isOpen && <AdminAddUser setOpen={setOpen}/>}
		{isEditOpen && <AdminUpdateUser setEditOpen={setEditOpen} currentUserId={currentUserId} setRender = {setRender}/>}
			<div className='main-div'>
				<div className='tables'>
					<div style={{
						display:'flex',
						justifyContent:'space-between',
						alignItems:'center'
					}}>
                        
					<h3 className='my-4'>Employees</h3>
					<button
					style={{
						border:'none',
						outline:'none',
						backgroundColor:"#2563EB",
						color:"#fff",
						padding:"7px 15px",
						borderRadius:"0.4rem"
					}}
					onClick={()=>{
						document.getElementById('scroll-hidden').style.overflow = 'hidden';
						setOpen(!isOpen)
					}}
					>AddUser<BiPlus/></button>
                    
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
									<td>{d.name}</td>
									<td>{d.hrmid}</td>
									<td>{d.department}</td>
									<td>{d.role}</td>
									<td>{d.location}</td>
									<td>{d.status === null ? 'not checked-in' : d.status}</td>
									<td>
										
										<button
										onClick={()=>{
											
											setCurrentUserId({
												userId:d.id,
												role:d.role,
												department:d.department,
												location:d.location
											});
											document.getElementById('scroll-hidden').style.overflow = 'hidden';
											setEditOpen(!isEditOpen);
										}}
										 style={{
											border:'none',
											outline:"none",
											backgroundColor:'transparent',
											marginLeft:"0.7rem"
										}}><AiFillEdit/></button>
										
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<nav className='pagging'>
						<div className='row pag justify-content-center align-items-center'>
							<div className='col-4 pagination page-item'>
								<a href='#' className='a3' onClick={prePage}>
									{' '}
									❮{' '}
								</a>
								<a href='#' className='a3' onClick={prePage}>
									{' '}
									Previous{' '}
								</a>
							</div>

							<div className='col-4 pagination m-t-2 p-2 a2'>
								{numbers.map((n, i) => (
									<div className={`page-item  ${curentPage === n ? 'active' : ''} `} key={i}>
										{curentPage == n ? (
											<a href='#' className='page-item pre pagenumber' onClick={() => changecPage(n)}>
												{' '}
												{n}{' '}
											</a>
										) : (
											<a href='#' className='page-item pre' onClick={() => changecPage(n)}>
												{' '}
												{n}{' '}
											</a>
										)}
									</div>
								))}
							</div>
							<div className='col-4 pagination '>
								<a className='Next a1' href='#' onClick={nextPage}>
									Next
								</a>
								<a href='#' className='next a1' onClick={nextPage}>
									❯
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
			
		</>
	);
	function prePage() {
		if (curentPage !== firstIndex && curentPage > 1) {
			setCurrentPage(curentPage - 1);
		}
	}
	function changecPage(id) {
		setCurrentPage(id);
	}
	function nextPage() {
		if (curentPage !== lastIndex && curentPage < nPage) {
			setCurrentPage(curentPage + 1);
		}
	}
}
export default AdminEmployeeTable;
