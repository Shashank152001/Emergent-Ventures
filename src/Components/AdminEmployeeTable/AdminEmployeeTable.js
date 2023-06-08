import { useEffect, useState } from 'react';
import './AdminEmployeeTable.css';
import { getUsers } from '../../Service/adminServices/userService';

function AdminEmployeeTable() {
	const [EmployeeData, setEmployeeData] = useState([]);
	const [curentPage, setCurrentPage] = useState(1);
	const recordPerPage = 10;
	const lastIndex = curentPage * recordPerPage;
	const firstIndex = lastIndex - recordPerPage;
	const records = EmployeeData.slice(firstIndex, lastIndex);
	const nPage = Math.ceil(EmployeeData.length / recordPerPage);
	const numbers = [...Array(nPage + 1).keys()].slice(1);

	useEffect(() => {
		getUsers()
			.then((data) => {
				setEmployeeData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className='main-div'>
				<div className='tables'>
					<h3 className='my-4'>Employees</h3>
					<table className='tabledata table' id='table'>
						<thead className='theading  '>
							<tr>
								<th scope='col-sm-3'>Employee Name</th>
								<th scope='col-sm-3'>Employee Id</th>
								<th scope='col-sm-3'>Departmenrt</th>
								<th scope='col-sm-3'>Job Role</th>
								<th scope='col-sm-3'>Location</th>
								<th scope='col-sm-3'>Status</th>
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
